/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Provider, connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import CasinoIcon from '@material-ui/icons/Casino';

import store from 'Store/store';

import './styles/style.scss';

type GetButtonProps = {
    randomPokemons: any[];
    pokemonsArr: any[];
};

const GetButton: React.FC<GetButtonProps> = ({ randomPokemons = [], pokemonsArr = [] }) => {
    const clearState = () => {
        store.dispatch({ type: 'CLEAR_RANDOM_POKEMON' });
    };

    const handleClick = () => {
        const randomPokemonFromArr = pokemonsArr[Math.floor(1 + Math.random() * pokemonsArr.length)];
        store.dispatch({ type: 'ADD_RANDOM_POKEMON', randomPokemonFromArr });
    };

    return (
        <div className="Button">
            <NavLink to={`/allPokemons/`}>
                <Button variant="contained" color="secondary">
                    {' '}
                    SHOW ALL POKEMON{' '}
                </Button>
            </NavLink>

            <Button onClick={clearState} className="clearBtn" variant="contained" color="secondary">
                CLEAR
            </Button>

            <Badge color="secondary" badgeContent={randomPokemons.length}>
                <Button
                    onClick={handleClick}
                    id="getPokemons"
                    className="getPokemons"
                    variant="contained"
                    color="secondary"
                    endIcon={<CasinoIcon />}
                >
                    GET A RANDOM POKEMON
                </Button>
            </Badge>
        </div>
    );
};

const ConnectedGetButton = connect((store: GetButtonProps) => {
    return {
        randomPokemons: store.randomPokemons,
        pokemonsArr: store.pokemonsArr,
    };
})(GetButton);

export default (props = {}) => (
    <Provider store={store}>
        <ConnectedGetButton {...props} />
    </Provider>
);
