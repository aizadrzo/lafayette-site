import React from "react";
import { MainLayout } from "@/components";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Loader } from "@/components/app-layout";

const Loading = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  if (loading) {
    return <Loader />;
  }

  return null;
};

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    import("preline");
  }, []);

  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Loading />
    </>
  );
}
