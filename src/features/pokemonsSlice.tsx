import { createSlice } from "@reduxjs/toolkit";

interface IPokemonsSliceState {}

const initialState: IPokemonsSliceState = {};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export default pokemonsSlice.reducer;
