import dbConnect from "@/db/connect";
import Place from "@/db/Schema/Place";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!place) {
      response.status(404).json({ status: "Not found" });
      return;
    }
    response.status(200).json(place);
    return;
  }

  if (request.method === "PUT") {
    try {
      const place = request.body;
      await Place.findByIdAndUpdate(id, place);
      response.status(201).json({ status: "updated" });
      return;
    } catch (error) {
      response.status(500).json({ error: error });
      return;
    }
  }
}
