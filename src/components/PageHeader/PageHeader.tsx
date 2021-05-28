import { FC } from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface Props {
  title: string;
  onBack?: boolean;
}

const PageHeader: FC<Props> = ({ title, onBack }) => {
  return (
    <IonHeader>
      <IonToolbar>
        {onBack && (
          <IonButtons slot="start">
            <IonBackButton defaultHref="/shopping-lists" />
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
