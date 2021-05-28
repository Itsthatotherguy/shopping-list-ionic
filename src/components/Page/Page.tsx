import { FC } from "react";
import { IonContent, IonPage } from "@ionic/react";
import PageHeader from "../PageHeader/PageHeader";

interface Props {
  pageTitle: string;
}

const Page: FC<Props> = ({ pageTitle, children }) => {
  return (
    <IonPage>
      <PageHeader title={pageTitle} />
      <IonContent fullscreen>{children}</IonContent>
    </IonPage>
  );
};

export default Page;
