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
          items: {
            count: 10,
            list: [
              { id: 0, name: "Lorem" },
              { id: 1, name: "Ipsum" },
              { id: 2, name: "Dolor" },
              { id: 3, name: "Sit" },
              { id: 4, name: "Amet" },
              { id: 5, name: "Consectetur" },
              { id: 6, name: "Adipiscing" },
              { id: 7, name: "Elit" },
              { id: 8, name: "Donec" },
              { id: 9, name: "Dui" },
            ],
          },
        },
        {
          id: "1",
          name: "Dog stuff",
          description:
            "Laboris fugiat proident cillum sint sint excepteur in et enim duis est.",
          items: {
            count: 2,
            list: [
              { id: 0, name: "Lorem" },
              { id: 1, name: "Ipsum" },
            ],
          },
        },
        {
          id: "2",
          name: "Cleaning materials",
          description:
            "Laboris fugiat proident cillum sint sint excepteur in et enim duis est.",
          items: {
            count: 5,
            list: [
              { id: 0, name: "Lorem" },
              { id: 1, name: "Ipsum" },
              { id: 2, name: "Dolor" },
              { id: 3, name: "Sit" },
              { id: 4, name: "Amet" },
            ],
          },
        },
      ],
    },

    models: {
      shoppingList: ShoppingListModel,
    },

    routes() {
      this.pretender.get("data:image/*", this.pretender.passthrough);
      this.pretender.get(
        "/svg/checkmark-circle-outline.svg",
        this.pretender.passthrough
      );

      this.get("/api/shopping-lists", (schema: AppSchema, request: Request) => {
        const shoppingLists = schema.all("shoppingList");

        return new Response(200, {}, shoppingLists);
      });
    },
  });

  return server;
}
