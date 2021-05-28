import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import client from "../../api/client";
import { ShoppingList, ShoppingListsResponse } from "../../models/ShoppingList";
import { RootState } from "../../store";

const adapter = createEntityAdapter<ShoppingList>();

interface SliceState {
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState = adapter.getInitialState<SliceState>({
  isLoading: false,
  error: null,
});

export const fetchShoppingLists = createAsyncThunk(
  "shoppingLists/fetchShoppingLists",
  async () => {
    const response = await client<ShoppingListsResponse>(
      "shopping-lists",
      "GET"
    );

    return response.shoppingLists;
  }
);

const shoppingListsSlice = createSlice({
  name: "shoppingLists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShoppingLists.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchShoppingLists.fulfilled, (state, action) => {
      adapter.upsertMany(state, action.payload);
      state.isLoading = false;
    });
    builder.addCase(fetchShoppingLists.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default shoppingListsSlice.reducer;

export const {
  selectAll: selectAllShoppingLists,
  selectById: selectShoppingListById,
} = adapter.getSelectors((state: RootState) => state.shoppingLists);

const selectShoppingListsState = (state: RootState) => state.shoppingLists;

export const selectIsLoading = createSelector(
  [selectShoppingListsState],
  (state) => state.isLoading
);
