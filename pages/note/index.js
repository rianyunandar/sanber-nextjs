import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useQueries } from "@/hooks/useQueries";

const Layout = dynamic(() => import("@/layout"));

export default function Notes() {
  const router = useRouter();
  const { data: listNotes } = useQueries({
    prefixUrl: "https://simpeg-be.vercel.app/api/v2/api/notes",
  });

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id) => {
    try {
      // Ask for confirmation before proceeding with the delete
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this note?"
      );

      if (!shouldDelete) {
        return; // If the user cancels the delete operation, do nothing
      }

      // Set the loading state to true when the deletion starts
      setIsDeleting(true);

      const response = await fetch(`/api/note/delete/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (result.success) {
        // Reload the page or update the state to reflect the changes
        router.reload();
      } else {
        // Handle the error, e.g., show a message to the user
        console.error(result.message);
      }
    } catch (error) {
      // Handle the error, e.g., show a generic error message
      console.error("Error deleting note:", error);
    } finally {
      // Set the loading state back to false after the deletion is complete
      setIsDeleting(false);
    }
  };

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
              {listNotes?.data?.map((item) => (
                <div key={item.id} className="col-span-1">
                  <div className="bg-white border rounded shadow p-5">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="flex justify-between flex-wrap mt-4">
                      <button
                        onClick={() => router.push(`/note /edit/${item.id}`)}
                        className="text-blue-500 hover:text-blue-700 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className={`${
                          isDeleting ? "opacity-50 cursor-not-allowed" : ""
                        } text-red-500 hover:text-red-700`}
                      >
                        {isDeleting ? "Deleting..." : "Delete"}
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
