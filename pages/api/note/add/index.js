// pages/api/note/add.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const urlApi = process.env.API_URL;

      const response = await fetch(`${urlApi}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message);
      }
      res.status(200).json({ success: true, message: result.message });
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
