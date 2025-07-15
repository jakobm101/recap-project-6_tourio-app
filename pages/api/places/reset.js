import dbConnect from "@/db/connect";
import reset from "@/db/resetDB";

export default async function handler(_, response) {
  await dbConnect();
  await reset();

  response.status(200).json({ message: "Deleting and creating" });
  return;
}
