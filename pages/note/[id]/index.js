import { useState } from "react";
import Layout from "@/layout";
const HOST_URL = process.env.HOST_URL;

export default function Notes({ note }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setIsDeleting(true);
      try {
        const res = await fetch(`${HOST_URL}/api/note/delete/${note.id}`, {
          method: "DELETE",
        });
        const result = await res.json();
        if (result.success) {
          alert("Note deleted successfully!");
          // Redirect or handle the deletion completion as needed
        } else {
          alert("Failed to delete the note. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting note:", error);
        alert("An error occurred while deleting the note. Please try again.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 md:px-32 px-10">
        <p>Note</p>
        <p>Title: {note.title}</p>
        <p>Description: {note.description}</p>
        <button
          onClick={handleDelete}
          className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
            isDeleting ? "opacity-50 cursor-not-allowed bg-slate-200" : ""
          }`}
          disabled={isDeleting}
        >
          Delete Note
        </button>
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
