import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function AddNotes() {
  const router = useRouter();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async () => {
    try {
      console.log(notes);
      const response = await fetch("http://localhost:3000/api/note/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notes),
      });
      const result = await response.json();
      if (result?.success) {
        router.push("/note");
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <div className="m-5 p-5">
          <div className="bg-white p-5">
            <h2 className="text-2xl font-bold">Add Notes</h2>
            <div className="grid gap-5">
              <div>
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="border rounded p-2 w-full"
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
                  onChange={(event) =>
                    setNotes({ ...notes, description: event.target.value })
                  }
                />
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}
