"use server";

import { Outcome } from "@/components/PostalNumber/Outcome";
import { getInfoByPostalNumber } from "@/services";
import { z } from "zod";

const postalNumberSchema = z
  .string()
  .transform((input) => input.replace(/\s+/g, ""))
  .pipe(z.string().min(5).max(5));

export async function checkPostal(
  prevState: string,
  formData: FormData
): Promise<Outcome> {
  try {
    const postalNumber = postalNumberSchema.parse(formData.get("postalnumber"));
    const data = await getInfoByPostalNumber(postalNumber);
    const county = data.results[0].county;
    if (county === "Stockholm") {
      return "success";
    } else {
      return "unavailable";
    }
  } catch (error) {
    console.error(error);
    return "error";
  }
}
