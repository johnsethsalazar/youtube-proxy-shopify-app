import { ActionFunction, json } from "@remix-run/node";
import { authenticate } from "../../../app/shopify.server";
import { Page } from "@shopify/polaris";

export const action: ActionFunction = async ({ request }) => {
  console.log("----- Hit App Proxy---------");

  const { session, admin } = await authenticate.public.appProxy(request);

  if (session) {
    console.log(session);
  }

  const response = await admin!.graphql(
    `#graphql
    mutation populateProduct($input: ProductInput!) {
      productCreate(input: $input) {
        product {
          id
        }
      }
    }`,
    {variables: {input: {title: "YouTube Test Product"}}}
  )

  console.log(response, 'responseeeeee')

  const productData = await response.json()

  return json({data: productData.data})
};

const Proxy = () => {
  return <Page>Proxy</Page>;
};
export default Proxy;
