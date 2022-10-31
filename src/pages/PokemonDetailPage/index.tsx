import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@features/store";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import PokemonDetailView from "../../components/PokemonDetailView";
import PokemonDetailProfile from "../../components/PokemonDetailProfile";
import * as S from "./styles";

import {
  getPokemonByNameOrId,
  getPokemonReducer,
  selectPokemon,
  selectPokemonsLength,
} from "@features/pokemonsSlice";

import {
  getPokemonSpecies,
  selectPokemonSpeciesLoading,
} from "@features/speciesSlice";

const PokemonDetailPage: React.FC = () => {
  const [pokemonId, setPokemonId] = useState<number>();

  const location = useLocation();
  const pathname = location.pathname;
  const convertedId = parseInt(pathname.replace("/pokemon/", ""));

  const pokemon = useSelector(selectPokemon);
  const loading = useSelector(selectPokemonSpeciesLoading);
  const dispatch = useAppDispatch();

  const pokemonsLength = useSelector(selectPokemonsLength);

  useEffect(() => {
    if (!pokemonsLength) {
      dispatch(getPokemonByNameOrId(convertedId));
    }
  }, [convertedId, dispatch, pokemonsLength]);

  useEffect(() => {
    dispatch(getPokemonSpecies(convertedId));

    setPokemonId(convertedId);
  }, [convertedId, dispatch]);

  useEffect(() => {
    if (pokemonId && pokemonsLength) {
      dispatch(getPokemonReducer({ pokemonId }));
    }
  }, [dispatch, pokemonId, pokemonsLength]);

  const pokemonItem = useMemo(() => {
    if (pokemon) {
      return (
        <S.PokemonDetailPage>
          <PokemonDetailView
            key={pokemon.id}
            index={pokemon.id}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            sprite={pokemon.sprites.other["official-artwork"].front_default}
          />
          <PokemonDetailProfile {...pokemon} />
        </S.PokemonDetailPage>
      );
    }

    return null;
  }, [pokemon]);

  return <Layout>{loading ? <Spinner /> : pokemonItem}</Layout>;
};

export default PokemonDetailPage;
