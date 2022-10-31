import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@features/store";
import * as S from "./styles";

import BackButton from "../BackButton";

import {
  getPokemonByNameOrId,
  selectPokemonsStatus,
} from "@features/pokemonsSlice";

import { LOADING } from "@constants";

const Searchbar: React.FC = () => {
  const [pokemonNameOrId, setPokemonNameOrId] = useState<string>("");

  const pokemonsStatus = useSelector(selectPokemonsStatus);
  const dispatch = useAppDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const enteredInput = event.target.value;
    setPokemonNameOrId(enteredInput);
  };

  const searchPokemonHandler = () => {
    if (pokemonNameOrId) {
      dispatch(getPokemonByNameOrId(pokemonNameOrId.toLowerCase()));
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (pokemonNameOrId) {
        dispatch(getPokemonByNameOrId(pokemonNameOrId.toLowerCase()));
      }
    }
  };

  return (
    <S.SearchBar>
      <div>
        <BackButton />
        <S.SearchInput
          placeholder="Enter the name or id of the pokémon"
          onChange={inputHandler}
          type="text"
          value={pokemonNameOrId}
          onKeyDown={keyDownHandler}
        />

        {pokemonsStatus === LOADING || pokemonNameOrId === "" ? (
          <S.SearchButtonClicked>Search</S.SearchButtonClicked>
        ) : (
          <S.SearchButton onClick={searchPokemonHandler}>Search</S.SearchButton>
        )}
      </div>
    </S.SearchBar>
  );
};

export default Searchbar;
