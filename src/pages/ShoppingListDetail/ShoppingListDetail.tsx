import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IonButton, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { checkmarkCircleOutline } from "ionicons/icons";
import Page from "../../components/Page/Page";
import { useAppSelector } from "../../store";
import { selectShoppingListById } from "../ShoppingLists/shoppingListsSlice";
import ShoppingListItem from "../../components/ShoppingListItem/ShoppingListItem";

const ShoppingListDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const shoppingList = useAppSelector((state) =>
    selectShoppingListById(state, id)
  );

  return (
    <Page pageTitle={shoppingList?.name || "Shopping List Detail"} onBack>
      {shoppingList && (
        <IonList>
          {shoppingList.items.list.map((item) => (
            <ShoppingListItem key={item.id} item={item} />
          ))}
        </IonList>
      )}
    </Page>
  );
};

export default ShoppingListDetail;
