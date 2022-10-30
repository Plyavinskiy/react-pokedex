import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "./store";
import { apiClient } from "@apiClient";
export interface IProps {
  limit: number;
  offset: number;
}

interface IPokemonsSliceState {}

const initialState: IPokemonsSliceState = {};

export const getPokemons = createAsyncThunk<
  void,
  IProps,
  { dispatch: AppDispatch; state: RootState }
>("pokemons/getPokemons", async (limits, { dispatch }) => {
  const { limit, offset } = limits;
  const { results, count } = await apiClient.getMultiplePokemons(limit, offset);
  console.log(results);
  console.log(count);
});

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export default pokemonsSlice.reducer;
