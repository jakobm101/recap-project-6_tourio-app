import Place from "./Schema/Place";
import { places } from "@/lib/db";

export default async function reset() {
  await Place.deleteMany();
  await Place.create(places);
}
