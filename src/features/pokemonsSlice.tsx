import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "./store";
import { apiClient } from "@apiClient";
import { IDLE, LOADING, ERROR } from "@constants";
import { IPokemon } from "./types";

export interface IProps {
  limit: number;
  offset: number;
}

interface IPokemonsSliceState {
  pokemons: IPokemon[];
  pokemon: IPokemon | null;
  count: number;
  hideShowAll: boolean;
  status: "idle" | "loading";
  error: string | null;
}

const initialState: IPokemonsSliceState = {
  pokemons: [],
  pokemon: null,
  count: 0,
  hideShowAll: true,
  status: IDLE,
  error: null,
};

export const getPokemonByNameOrId = createAsyncThunk<
  void,
  string | number,
  {
    dispatch: AppDispatch;
  }
>("pokemons/getPokemonByNameOrId", async (name, { dispatch }) => {
  const pokemon = await apiClient.getPokemon(name);

  dispatch(getPokemonByNameOrIdReducer({ pokemon }));
});

export const getPokemons = createAsyncThunk<
  void,
  IProps,
  { dispatch: AppDispatch; state: RootState }
>(
  "pokemons/getPokemons",
  async (limits, { dispatch }) => {
    const pokemonList = [];
    const { limit, offset } = limits;
    const { results, count } = await apiClient.getMultiplePokemons(
      limit,
      offset
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const [_, { name }] of results.entries()) {
      const pokemon = await apiClient.getPokemon(name);

      pokemonList.push(pokemon);
    }

    dispatch(
      getPokemonsReducer({
        pokemons: pokemonList,
        count,
      })
    );
  },
  {
    condition: (_, { getState }) => {
      const { pokemons } = getState();

      if (!pokemons.hideShowAll || pokemons.status === LOADING) {
        return false;
      }
      return;
    },
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemonByNameOrIdReducer(
      state,
      action: PayloadAction<{ pokemon: IPokemon }>
    ) {
      const { pokemon } = action.payload;

      state.pokemons.length = 0;
      state.hideShowAll = false;
      state.pokemons.push(pokemon);
      state.error = null;
    },
    getPokemonsReducer(
      state,
      action: PayloadAction<{
        pokemons: IPokemon[];
        count: number;
      }>
    ) {
      const { pokemons, count } = action.payload;

      state.count = count;
      state.pokemons = state.pokemons.concat(pokemons);
    },
    getPokemonReducer(
      state,
      action: PayloadAction<{
        pokemonId: number;
      }>
    ) {
      const { pokemonId } = action.payload;

      state.pokemon =
        state.pokemons.length === 1
          ? state.pokemons[0]
          : state.pokemons[pokemonId];
    },
    clearPokemonsReducer(state) {
      state.error = null;
      state.pokemons.length = 0;
      state.hideShowAll = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonByNameOrId.pending, (state) => {
      state.error = null;
      state.status = LOADING;
    });
    builder.addCase(getPokemonByNameOrId.rejected, (state) => {
      state.pokemons.length = 0;
      state.hideShowAll = false;
      state.status = IDLE;
      state.error = ERROR;
    });
    builder.addCase(getPokemonByNameOrId.fulfilled, (state) => {
      state.error = null;
      state.status = IDLE;
    });
    builder.addCase(getPokemons.pending, (state) => {
      state.error = null;
      state.status = LOADING;
    });
    builder.addCase(getPokemons.fulfilled, (state) => {
      state.error = null;
      state.status = IDLE;
    });
  },
});

export const {
  getPokemonByNameOrIdReducer,
  getPokemonsReducer,
  getPokemonReducer,
  clearPokemonsReducer,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

export const selectAllPokemons = (state: RootState) => state.pokemons.pokemons;
export const selectPokemon = (state: RootState) => state.pokemons.pokemon;
export const selectCount = (state: RootState) => state.pokemons.count;
export const selectHideShowAll = (state: RootState) =>
  state.pokemons.hideShowAll;
export const selectPokemonsStatus = (state: RootState) => state.pokemons.status;
export const selectPokemonError = (state: RootState) => state.pokemons.error;
export const selectPokemonsLength = (state: RootState) =>
  state.pokemons.pokemons.length;
