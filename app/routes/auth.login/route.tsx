import {ActionFunction} from "@remix-run/node";
import {authenticate} from "../../../app/shopify.server";
import { Page } from "@shopify/polaris";

export const action: ActionFunction = async ({ request }) => {
  console.log("----- Hit App Proxy---------")

  const {session} = await authenticate.public.appProxy(request);

  if (session) {
    console.log(session)
  }

  return null
}

const Proxy = () => {
  return <Page>Proxy</Page>
}
export default Proxy