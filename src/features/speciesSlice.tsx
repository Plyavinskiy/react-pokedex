import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "./store";
import { apiClient } from "@apiClient";
import { ISpecies } from "./types";

interface ISpeciesSliceState {
  species: ISpecies | null;
  loading: boolean;
}

const initialState: ISpeciesSliceState = {
  species: null,
  loading: false,
};

export const getPokemonSpecies = createAsyncThunk<
  void,
  string | number,
  {
    dispatch: AppDispatch;
  }
>("pokemons/getPokemonSpecies", async (name, { dispatch }) => {
  const species = await apiClient.getPokemonSpecies(name);

  dispatch(getPokemonSpeciesReducer({ species }));
});

const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    getPokemonSpeciesReducer(
      state,
      action: PayloadAction<{ species: ISpecies }>
    ) {
      const { species } = action.payload;

      state.species = species;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonSpecies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPokemonSpecies.fulfilled, (state) => {
      state.loading = false;
    });
  },
});

export const { getPokemonSpeciesReducer } = speciesSlice.actions;

export default speciesSlice.reducer;

export const selectPokemonSpecies = (state: RootState) => state.species.species;
export const selectPokemonSpeciesLoading = (state: RootState) =>
  state.species.loading;
