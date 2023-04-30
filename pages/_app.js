import React from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    import("preline");
  }, []);
  return <Component {...pageProps} />;
}
