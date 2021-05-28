import { FC } from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface Props {
  title: string;
}

const PageHeader: FC<Props> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
