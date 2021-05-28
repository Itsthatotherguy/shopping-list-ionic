import { FC } from "react";
import { useParams } from "react-router-dom";
import {} from "@ionic/react";
import Page from "../../components/Page/Page";

const ShoppingListDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page pageTitle={`Detail of list with ID ${id}`}>
      <p>Check this out {id}</p>
    </Page>
  );
};

export default ShoppingListDetail;
