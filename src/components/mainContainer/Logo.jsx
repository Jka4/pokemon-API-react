import React, { lazy, Suspense } from "react";
import Tilt from "react-tilt";

const ImageContainer = lazy(() => import("@ImageContainer"));

const Logo = () => {
  const base64placeholder =
    "data:image/png;base64,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";

  return (
    <div className="getButtonLine">
      <div className="Tilt-inner">
        <Suspense
          fallback={
            <img
              className="logotype logoBase64"
              src={base64placeholder}
              alt=""
            />
          }
        >
          <Tilt
            className="Tilt"
            options={{
              easing: "cubic-bezier(.03,.98,.52,.99)",
              scale: 1.2,
              max: 35,
            }}
          >
            <ImageContainer
              url={`${process.env.PUBLIC_URL}/images/pokemon.gif`}
              cn={"logotype"}
            />
          </Tilt>
        </Suspense>
      </div>
    </div>
  );
};

export default Logo;