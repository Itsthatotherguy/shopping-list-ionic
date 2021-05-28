import {
  belongsTo,
  createServer,
  Factory,
  hasMany,
  Model,
  Request,
  Response,
  RestSerializer,
} from "miragejs";
import { ModelDefinition, Registry } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { ShoppingList } from "../../models/ShoppingList";

const ShoppingListModel: ModelDefinition<ShoppingList> = Model.extend({});

type AppRegistry = Registry<
  {
    shoppingList: typeof ShoppingListModel;
  },
  {}
>;

type AppSchema = Schema<AppRegistry>;

export function makeServer() {
  let server = createServer({
    serializers: {
      shoppingList: RestSerializer.extend({}),
    },

    fixtures: {
      shoppingLists: [
        {
          id: "0",
          name: "Groceries",
          description:
            "Laboris fugiat proident cillum sint sint excepteur in et enim duis est.",
          numItems: 10,
        },
        {
          id: "1",
          name: "Dog stuff",
          description:
            "Laboris fugiat proident cillum sint sint excepteur in et enim duis est.",
          numItems: 2,
        },
        {
          id: "2",
          name: "Cleaning materials",
          description:
            "Laboris fugiat proident cillum sint sint excepteur in et enim duis est.",
          numItems: 5,
        },
      ],
    },

    models: {
      shoppingList: ShoppingListModel,
    },

    routes() {
      this.get("/api/shopping-lists", (schema: AppSchema, request: Request) => {
        const shoppingLists = schema.all("shoppingList");

        return new Response(200, {}, shoppingLists);
      });
    },
  });

  return server;
}
