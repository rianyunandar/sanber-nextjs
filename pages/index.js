import Layout from "@/layout";

export default function Main({ children, metaTitle, metaDescription }) {
  return (
    <>
      <Layout metaTitle={"Home"} metaDescription={"Portofolio By Rian"}>
        <div className="text-3xl font-bold underline">HomePage</div>
      </Layout>
    </>
  );
}
