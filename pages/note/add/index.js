import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function AddNotes() {
  const { mutate } = useMutation();

  const router = useRouter();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await mutate({
        url: "https://paace-f178cafcae7b.nevacloud.io/api/notes",
        payload: notes,
      });
      const result = await response.json();
      if (result?.success) {
        setAlertMessage("Note added successfully!");
        router.push("/note");
      } else {
        setAlertMessage("Failed to add note. Please try again.");
      }
    } catch (error) {
      setAlertMessage("An error occurred. Please try again later.");
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <div className="m-5 p-5">
          <div className="bg-white p-5">
            <h2 className="text-2xl font-bold">Add Notes</h2>
            {alertMessage && (
              <div
                className={`${
                  alertMessage.includes("successfully")
                    ? "bg-green-100 border-l-4 border-green-500"
                    : "bg-red-100 border-l-4 border-red-500"
                } text-green-700 p-4 my-4`}
              >
                {alertMessage}
              </div>
            )}

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
                  className={`${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  } bg-blue-500 text-white py-2 px-4 rounded`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}
