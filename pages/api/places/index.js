import dbConnect from "@/db/connect";
import Place from "@/db/Schema/Place";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const places = await Place.find();
      response.status(200).json(places);
      return;
    } catch (error) {
      response.status(500).json({ error: error.message });
      return;
    }
  } else {
    response.status(500).json({ message: "Not allowed" });
  }
}
