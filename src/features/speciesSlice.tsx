import { createSlice } from "@reduxjs/toolkit";

interface ISpeciesSliceState {}

const initialState: ISpeciesSliceState = {};

const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {},
});

export default speciesSlice.reducer;
