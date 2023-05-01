import React from "react";
import { MainLayout } from "@/components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    import("preline");
  }, []);

  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} />);
}
