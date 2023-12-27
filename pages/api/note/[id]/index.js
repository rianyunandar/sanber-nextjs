export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const urlApi = process.env.API_URL;
    const response = await fetch(`${urlApi}/notes/${id}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error / Time Out" });
  }
}
