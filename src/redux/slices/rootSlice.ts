import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    id: 1,
    common_name: "plant",
    species_name: "plantus planti",
    size: "35",
    origin: "origin",
    light: "light",
    shade: "shade",
    soil: "soil",
    fertilize: "fertilize",
  },
  reducers: {
    chooseCName: (state, action) => {
      state.common_name = action.payload;
    },
    chooseSName: (state, action) => {
      state.species_name = action.payload;
    },
    chooseSize: (state, action) => {
      state.size = action.payload;
    },
    chooseOrigin: (state, action) => {
      state.origin = action.payload;
    },
    chooseLight: (state, action) => {
      state.light = action.payload;
    },
    chooseShade: (state, action) => {
      state.shade = action.payload;
    },
    chooseSoil: (state, action) => {
      state.soil = action.payload;
    },
    chooseFertilize: (state, action) => {
      state.fertilize = action.payload;
    },
  },
});

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseCName, chooseSName, chooseSize, chooseOrigin, chooseLight, chooseShade, chooseSoil, chooseFertilize } = rootSlice.actions;
