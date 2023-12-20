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
      <div className="grid grid-cols-1">
        <Header />
        <div className="flex">
          <div className="flex flex-col gap-2 px-8 md:px-16 lg:px-32">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
