import { FC, useEffect } from "react";
import { IonItem, IonLabel, IonList, IonNote, IonLoading } from "@ionic/react";
import Page from "../../components/Page/Page";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  fetchShoppingLists,
  selectAllShoppingLists,
  selectIsLoading,
} from "./shoppingListsSlice";

const ShoppingLists: FC = () => {
  const dispatch = useAppDispatch();
  const shoppingLists = useAppSelector(selectAllShoppingLists);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchShoppingLists());
  }, [dispatch]);

  return (
    <Page pageTitle="Shopping Lists">
      <IonLoading isOpen={isLoading} message="Please wait ..." />
      <IonList>
        {shoppingLists.map((shoppingList) => (
          <IonItem
            key={shoppingList.id}
            routerLink={`/shopping-lists/${shoppingList.id}`}
          >
            <IonLabel>
              <h2>{shoppingList.name}</h2>
              <p>{shoppingList.description}</p>
            </IonLabel>
            <IonNote slot="end">{shoppingList.items.count} items</IonNote>
          </IonItem>
        ))}
      </IonList>
    </Page>
  );
};

export default ShoppingLists;
