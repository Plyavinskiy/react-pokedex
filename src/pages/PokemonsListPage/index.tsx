import { useEffect } from "react";

import { useAppDispatch } from "@features/store";

import { getPokemons } from "@features/pokemonsSlice";

import { FIRST_FETCH_LIMIT, FIRST_FETCH_OFFSET } from "@constants";

const PokemonsListPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getPokemons({ limit: FIRST_FETCH_LIMIT, offset: FIRST_FETCH_OFFSET })
    );
  }, [dispatch]);

  return <div>Pokemons List Page</div>;
};

export default PokemonsListPage;
