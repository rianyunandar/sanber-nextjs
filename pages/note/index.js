import React from "react";
import Layout from "@/layout";
import Link from "next/link";

const NoteList = ({ notes }) => {
  return (
    <Layout>
      <div className="text-3xl font-bold underline flex flex-grow">
        Note List
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/note/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

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

export default NoteList;
