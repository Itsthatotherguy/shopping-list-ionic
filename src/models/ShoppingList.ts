export interface ShoppingList {
  id: string;
  name: string;
  description: string;
  items: {
    count: number;
    list: ShoppingListItem[];
  };
  numItems: number;
}

export interface ShoppingListItem {
  id: string;
  name: string;
}

export interface ShoppingListsResponse {
  shoppingLists: ShoppingList[];
}
