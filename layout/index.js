import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

export default function Layout({ children, metaTitle, metaDescription }) {
  return (
    <>
      <Head>
        <title>{`Portofolio Next Js by Rian - ${metaTitle}`}</title>
        <meta
          name="description"
          content={metaDescription || "Never Stop Learning"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col px-46">
        <Header />
        <div className="flex">{children}</div>
        <Footer />
      </div>
    </>
  );
}
