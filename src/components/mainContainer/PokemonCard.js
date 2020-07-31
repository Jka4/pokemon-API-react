import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner'
import { NavLink } from "react-router-dom";
import ImageContainer from '../ImageContainer/ImageContainer';

const PokemonCard = (props) => {
	const { src, name, order, base_experience, id, onClick } = props;

	return (
		<NavLink to={`/detailedPage/pokemon/${name}`} className='pokemonCard_Outher' data-pokemon_id={id} onClick={onClick}
			key={id}>
			<div className='pokemonCard'>
				<div className="imageWrapper">
					{src ? (<Suspense fallback={<Loader type="TailSpin" height={50}
						width={50} color={"red"}
					/>}>
						<ImageContainer url={src} />
					</Suspense>) : (
							(<Loader type="TailSpin" height={50}
								width={50} color={"red"}
							/>)
						)}

				</div>
				<span>{name}</span>
				<span>{order}</span>
				<span>{base_experience}</span>
			</div>
		</NavLink>
	);
}

export default PokemonCard;