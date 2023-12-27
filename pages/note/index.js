import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@/layout"));

export async function getStaticProps() {
  try {
    const HOST_URL = process.env.HOST_URL;
    const response = await fetch(`${HOST_URL}/api/note`);
    const data = await response.json();

    return {
      props: { notes: data.data },
    };
  } catch (error) {
    return {
      props: { notes: [] },
    };
  }
}

export default function Notes({ notes }) {
  const router = useRouter();

  return (
    <>
      <Layout metaTitle="Notes">
        <div className="lg:px-28">
          <div className="flex justify-end mb-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => router.push("/note/add")}
            >
              Add Notes
            </button>
          </div>
          <div className="flex">
            <div className="grid grid-cols-3 gap-5">
              {notes.map((item) => (
                <div key={item.id} className="col-span-1">
                  <div className="bg-white border rounded shadow p-5">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="flex justify-between flex-wrap mt-4">
                      <button
                        onClick={() => router.push(`/notes/edit/${item.id}`)}
                        className="text-blue-500 hover:text-blue-700 mr-2"
                      >
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
