export interface ShoppingList {
  id: string;
  name: string;
  description: string;
  numItems: number;
}

export interface ShoppingListsResponse {
  shoppingLists: ShoppingList[];
}
