import dbConnect from "@/db/connect";
import Place from "@/db/Schema/Place";
import { uid } from "uid";

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
  }
  if (request.method === "POST") {
    try {
      // console.log("request body", request.body);

      const place = request.body;
      place._id = uid();
      place.image =
        "https://images.unsplash.com/photo-1473615695634-d284ec918736?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80";
      console.log("place", place);
      await Place.create(place);

      response.status(201).json({ status: "created" });
      return;
    } catch (error) {
      response.status(500).json({ error: error });
      return;
    }
  }

  response.status(500).json({ message: "Not allowed" });
}
