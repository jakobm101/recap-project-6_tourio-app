import dbConnect from "@/db/connect";
import Place from "@/db/Schema/Place";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  const place = await Place.findById(id);
  

  if (!place) {
    response.status(404).json({ status: "Not found" });
    return;
  }

  response.status(200).json({place});
}
