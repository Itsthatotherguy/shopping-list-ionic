import { FC } from "react";
import { IonContent, IonPage } from "@ionic/react";
import PageHeader from "../PageHeader/PageHeader";

interface Props {
  pageTitle: string;
  onBack?: boolean;
}

const Page: FC<Props> = ({ pageTitle, children, onBack }) => {
  return (
    <IonPage>
      <PageHeader title={pageTitle} onBack={onBack} />
      <IonContent fullscreen>{children}</IonContent>
    </IonPage>
  );
};

export default Page;
