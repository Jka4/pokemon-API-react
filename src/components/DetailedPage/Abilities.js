import React from "react";

const Abilities = (props) => {
	const abilities = props?.abilities;

	return (
		<div className='abilities'>
			<ul className='abilitiesUL'>
				<div className='skills_title'>Abilities</div>

				{abilities && abilities.map((i, key) => (
					<li className='abilitiesLI' key={key}>
						{key + 1}: {i.ability.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Abilities;