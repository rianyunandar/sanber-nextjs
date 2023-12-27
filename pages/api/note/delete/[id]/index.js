// pages/api/note/delete.js
export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const urlApi = process.env.API_URL;
      console.log(req.query.id);

      const response = await fetch(`${urlApi}/notes/delete/${req.query.id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
      if (!result.success) {
        throw new Error(result.message);
      }
      res
        .status(200)
        .json({ success: true, message: "Note deleted successfully" });
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
