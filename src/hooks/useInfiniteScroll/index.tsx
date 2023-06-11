import React, { Dispatch, FC, SetStateAction, useCallback, useRef, useState } from 'react';
import { useDeepCompareEffect, useMountedState } from 'react-use';
// import PaginationData from 'ac/typings/PaginationData';
// import Spinner from 'components/Spinner';
// import colors from 'styles/colors';
import UseInfiniteScrollContainer from './components/UseInfiniteScrollContainer';

export type UseInfiniteScrollProps = Readonly<{
  limit: number;
  fetchList: any;
  dependencies?: ReadonlyArray<unknown>;
  resetDependencies?: ReadonlyArray<unknown>;
  targetId?: string;
}>;

type UseInfiniteScrollReturn = Readonly<{
  InfiniteScroll: FC;
  total: number;
  entitys: any;
  setEntitys: Dispatch<SetStateAction<any>>;
  loading: boolean;
  requestList: (page: number) => Promise<void>;
  loaded: boolean;
}>;

const useInfiniteScroll = ({
  limit,
  fetchList,
  dependencies = [],
  resetDependencies = [],
  targetId,
}: UseInfiniteScrollProps): UseInfiniteScrollReturn => {
  const isMounted = useMountedState();
  const spinnerRef = useRef<HTMLDivElement>(null);
  const [total, setTotal] = useState(722);
  // let total = 722;
  const [entitys, setEntitys] = useState<string[]>([]);
  const [lastPage, setLastPage] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const hasMore = lastPage < Math.ceil(total / limit) - 1;

  const requestList =
    (shouldShowSpinner: boolean) =>
    async (page: number): Promise<void> => {
      if (shouldShowSpinner) setLoading(true);

      try {
        console.log('🚀 ~ page', page);
        console.log('🚀 ~ limit', limit);

        const result = await fetchList({
          $limit: limit,
          $skip: String(page * limit),
        });
        // console.log('🚀 ~ result', result);

        if (isMounted()) {
          const entryIds: string[] = [...entitys, ...result];

          if (page > lastPage) {
            setEntitys(entryIds);
            setLastPage(page);
          } else {
            setEntitys([...result]);
          }

          setTotal(722);
          // total = 722;
        }
      } catch (error) {
        setLoading(false);
        setLoaded(true);
      } finally {
        if (isMounted()) {
          setLoading(false);
          setLoaded(true);
        }
      }
    };

  const handleObserver = useCallback(
    async ([target]: IntersectionObserverEntry[]): Promise<void> => {
      if (!target.isIntersecting || !entitys.length || !hasMore || loading) {
        return;
      }

      await requestList(true)(lastPage + 1);
    },
    [hasMore, loading, requestList, lastPage, entitys],
  );

  const InfiniteScroll: FC = () => (
    <>
      {hasMore && (
        <UseInfiniteScrollContainer ref={spinnerRef} $visible={loading}>
          {/* <Spinner $color={colors.pink} $size={40} /> */}
          Spinner
        </UseInfiniteScrollContainer>
      )}

      {loading && !hasMore && (
        <UseInfiniteScrollContainer ref={spinnerRef} $visible={loading}>
          {/* <Spinner $color={colors.pink} $size={40} /> */}
          Spinner
        </UseInfiniteScrollContainer>
      )}
    </>
  );

  useDeepCompareEffect((): void => {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (spinnerRef.current) {
      observer.observe(spinnerRef.current);
    }
  }, [spinnerRef, handleObserver, dependencies]);

  useDeepCompareEffect((): void => {
    (async (): Promise<void> => {
      await requestList(true)(0);
    })();
  }, [dependencies]);

  useDeepCompareEffect(() => {
    setLastPage(0);
    setEntitys([]);
    setTotal(0);
    // total = 0;
  }, [resetDependencies]);

  return {
    InfiniteScroll,
    total,
    entitys: entitys,
    setEntitys,
    loading,
    requestList: requestList(false),
    loaded,
  };
};

export default useInfiniteScroll;
