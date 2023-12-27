// pages/api/note/update.js
export default async function handler(req, res) {
  if (req.method === "PATCH") {
    try {
      const urlApi = process.env.API_URL;
      console.log(req.query.id);
      console.log(req.body);

      const response = await fetch(`${urlApi}/notes/update/${req.query.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
      const result = await response.json();

      console.log(result);
      if (!result.success) {
        throw new Error(result.message);
      }
      res
        .status(200)
        .json({ success: true, message: "Note updated successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
