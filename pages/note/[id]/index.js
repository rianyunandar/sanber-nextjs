import Layout from "@/layout";
const HOST_URL = process.env.HOST_URL;

export default function Notes({ note }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 md:px-32 px-10">
        <p>Note</p>
        <p>Title: {note.title}</p>
        <p>description: {note.description}</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const { id } = context.params;

    const res = await fetch(`${HOST_URL}/api/note/${id}`);
    const resJson = await res.json();
    const { data } = resJson;

    return {
      props: { note: data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { note: null },
    };
  }
}
export async function getStaticPaths() {
  try {
    const HOST_URL = process.env.HOST_URL;
    const res = await fetch(`${HOST_URL}/api/note`);
    const noteIds = await res.json();

    const paths = noteIds.data.map((id) => ({
      params: { id: id.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }
}
