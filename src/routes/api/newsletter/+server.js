// api/newsletter GET

import { json } from "@sveltejs/kit";

export const GET = async (event) => {
  return json("hello");
};

export const POST = async (event) => {
  const data = await event.request.formData();
  const email = data.get("email");

  console.log("email", email);

  return json({ email });
};
