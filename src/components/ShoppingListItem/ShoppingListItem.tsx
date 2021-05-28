import { FC, useState } from "react";
import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";
import { ShoppingListItem as ShoppingListItemModel } from "../../models/ShoppingList";
import "./ShoppingListItem.css";

interface Props {
  item: ShoppingListItemModel;
}

const ShoppingListItem: FC<Props> = ({ item }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <IonItem key={item.id} className={completed ? "completed" : ""}>
      <IonLabel className={completed ? "completed" : ""}>{item.name}</IonLabel>
      <IonIcon
        onClick={handleToggleCompleted}
        slot="end"
        icon={!completed ? checkmarkCircleOutline : closeCircleOutline}
      ></IonIcon>
    </IonItem>
  );
};

export default ShoppingListItem;
