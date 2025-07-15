import dbConnect from "@/db/connect";
import { places } from "../../../lib/db";
import Place from "@/db/Schema/Place";

export default async function handler(_, response) {
  await dbConnect();
  await Place.deleteMany();
  await Place.create(places);

  response.status(200).json(places);
  return;
}
