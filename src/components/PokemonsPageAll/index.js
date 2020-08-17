import React, { useState } from "react";
import { Provider, connect } from 'react-redux';

import store from "@Store";
import ListView from '@ListView';
import CatalogView from '@CatalogView';

const PokemonsPageAll = (props) => {
	const { pokemonDataArray } = props
	const [viewTypeIsCatalog, setViewTypeIsCatalog] = useState(true);

	return (
		<React.Fragment>
			<div className="viewType">
				<div className="viewTypeInner">
					<div className="innerBlock" onClick={() => setViewTypeIsCatalog(!viewTypeIsCatalog)} >
						<span>View type </span>
						<span className='separator' >|</span>

						{!viewTypeIsCatalog
							? (<div className="catalog">
								<svg viewBox="0 0 16 16" id="icon-view-less"><path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895416 0.895508 0 2 0C3.10449 0 4 0.895416 4 2C4 3.10458 3.10449 4 2 4C0.895508 4 0 3.10458 0 2ZM6 2C6 0.895416 6.89551 0 8 0C9.10449 0 10 0.895416 10 2C10 3.10458 9.10449 4 8 4C6.89551 4 6 3.10458 6 2ZM14 0C12.8955 0 12 0.895416 12 2C12 3.10458 12.8955 4 14 4C15.1045 4 16 3.10458 16 2C16 0.895416 15.1045 0 14 0ZM0 8C0 6.89542 0.895508 6 2 6C3.10449 6 4 6.89542 4 8C4 9.10458 3.10449 10 2 10C0.895508 10 0 9.10458 0 8ZM8 6C6.89551 6 6 6.89542 6 8C6 9.10458 6.89551 10 8 10C9.10449 10 10 9.10458 10 8C10 6.89542 9.10449 6 8 6ZM12 8C12 6.89542 12.8955 6 14 6C15.1045 6 16 6.89542 16 8C16 9.10458 15.1045 10 14 10C12.8955 10 12 9.10458 12 8ZM2 12C0.895508 12 0 12.8954 0 14C0 15.1046 0.895508 16 2 16C3.10449 16 4 15.1046 4 14C4 12.8954 3.10449 12 2 12ZM6 14C6 12.8954 6.89551 12 8 12C9.10449 12 10 12.8954 10 14C10 15.1046 9.10449 16 8 16C6.89551 16 6 15.1046 6 14ZM14 12C12.8955 12 12 12.8954 12 14C12 15.1046 12.8955 16 14 16C15.1045 16 16 15.1046 16 14C16 12.8954 15.1045 12 14 12Z"></path></svg>
							</div>)
							: (<div className="list">
								<svg viewBox="0 0 15 15" id="icon-view-more"><g><circle cx="1.5" cy="1.5" r="1.5"></circle><circle cx="1.5" cy="5.5" r="1.5"></circle><circle cx="1.5" cy="9.5" r="1.5"></circle><circle cx="5.5" cy="9.5" r="1.5"></circle><circle cx="9.5" cy="9.5" r="1.5"></circle><circle cx="13.5" cy="9.5" r="1.5"></circle><circle cx="13.5" cy="13.5" r="1.5"></circle><circle cx="9.5" cy="13.5" r="1.5"></circle><circle cx="5.5" cy="13.5" r="1.5"></circle><circle cx="1.5" cy="13.5" r="1.5"></circle><circle cx="5.5" cy="1.5" r="1.5"></circle><circle cx="5.5" cy="5.5" r="1.5"></circle><circle cx="9.5" cy="5.5" r="1.5"></circle><circle cx="13.5" cy="5.5" r="1.5"></circle><circle cx="9.5" cy="1.5" r="1.5"></circle><circle cx="13.5" cy="1.5" r="1.5"></circle></g></svg>
							</div>)}
					</div>
				</div>
			</div>

			{
				!viewTypeIsCatalog
					? (<ListView pokemonDataArray={pokemonDataArray} />)
					: (<CatalogView pokemonDataArray={pokemonDataArray} />)
			}

		</React.Fragment>
	)
}


const ConnectedPokemonsPageAll = connect(store => {
	return {
		pokemonDataArray: store.pokemonsArr,
	};
})(PokemonsPageAll);

export default props => (
	<Provider store={store}>
		<ConnectedPokemonsPageAll {...props} />
	</Provider>
);
