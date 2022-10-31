import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@features/store";

import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import PokemonCard from "../../components/PokemonCard";
import SearchBar from "../../components/SearchBar";
import InfiniteScroll from "../../components/InfiniteScroll";
import PokemonAlert from "../../components/PokemonAlert";
import * as S from "./styles";

import {
  getPokemons,
  selectAllPokemons,
  selectHideShowAll,
  selectPokemonsStatus,
  selectCount,
  clearPokemonsReducer,
  selectPokemonError,
} from "@features/pokemonsSlice";

import {
  IDLE,
  ERROR,
  NEXT_FETCH_LIMIT,
  FIRST_FETCH_LIMIT,
  FIRST_FETCH_OFFSET,
} from "@constants";

const PokemonsListPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [initLoading, setInitLoading] = useState(false);

  const hideShowAll = useSelector(selectHideShowAll);
  const pokemons = useSelector(selectAllPokemons);
  const pokemonsStatus = useSelector(selectPokemonsStatus);
  const pokemonError = useSelector(selectPokemonError);
  const count = useSelector(selectCount);

  const prevPokemonsLength = useRef(pokemons.length);

  const dispatch = useAppDispatch();

  const pokemonsList = pokemons.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      name={pokemon.name}
      index={pokemon.id}
      sprite={pokemon.sprites.other["official-artwork"].front_default}
      typeOne={pokemon.types[0].type.name}
      typeTwo={pokemon.types[1] === undefined ? "" : pokemon.types[1].type.name}
    />
  ));

  const getMorePokemons = async () => {
    if (
      pokemonsStatus === IDLE &&
      pokemons.length > 0 &&
      !loading &&
      hideShowAll &&
      pokemons.length + 1 <= count
    ) {
      const currentOffset = pokemons.length + 1;
      setLoading(true);
      dispatch(getPokemons({ limit: NEXT_FETCH_LIMIT, offset: currentOffset }));
    }
  };

  useEffect(() => {
    if (pokemons.length === 0 && hideShowAll) {
      setInitLoading(true);
      dispatch(clearPokemonsReducer());
      dispatch(
        getPokemons({ limit: FIRST_FETCH_LIMIT, offset: FIRST_FETCH_OFFSET })
      );
    }
    // eslint-disable-next-line
  }, [hideShowAll]);

  useEffect(() => {
    if (prevPokemonsLength.current !== pokemons.length) {
      setLoading(false);
      setInitLoading(false);
    }
  }, [pokemons.length]);

  return (
    <Layout>
      <S.PokemonsListPage>
        {initLoading ? (
          <Spinner />
        ) : (
          <>
            <SearchBar />
            <InfiniteScroll callBack={getMorePokemons}>
              <S.PokemonsListWrapper>
                {pokemonsList}
                {pokemonError === ERROR && (
                  <PokemonAlert message={"There is no such pokemon"} />
                )}
              </S.PokemonsListWrapper>
              {loading && <Spinner />}
            </InfiniteScroll>
          </>
        )}
      </S.PokemonsListPage>
    </Layout>
  );
};

export default PokemonsListPage;
