import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function EditNotes() {
  const router = useRouter();
  const { id } = router.query;
  const [notes, setNotes] = useState({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true); // Set loading to true when submitting

      const response = await fetch(`/api/note/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: notes.title,
          description: notes.description,
        }),
      });

      const result = await response.json();
      if (result?.success) {
        window.alert("Note updated successfully!");
        router.push("/note");
      }
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false); // Set loading back to false when done
    }
  };

  useEffect(() => {
    async function fetchingData() {
      try {
        const res = await fetch(`/api/note/${id}`);
        const listNotes = await res.json();
        setNotes(listNotes?.data);
      } catch (error) {
        // Handle error
      }
    }
    fetchingData();
  }, [id]);

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <div className="m-5 p-5">
          <div className="bg-white p-5">
            <h2 className="text-2xl font-bold">Edit Notes</h2>
            <div className="grid gap-5">
              <div>
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                {notes?.title == "" ? <div>Loading data</div> : ""}

                <input
                  type="text"
                  id="title"
                  className="border rounded p-2 w-full"
                  value={notes?.title || ""}
                  onChange={(event) =>
                    setNotes({ ...notes, title: event.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="description" className="text-sm">
                  Description
                </label>
                <textarea
                  id="description"
                  className="border rounded p-2 w-full"
                  value={notes?.description || ""}
                  onChange={(event) =>
                    setNotes({ ...notes, description: event.target.value })
                  }
                />
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className={`bg-blue-500 text-white py-2 px-4 rounded ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}
