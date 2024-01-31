"use server";

import { Outcome } from "@/components/PostalNumberForm/Outcome";
import { getInfoByPostalNumber } from "@/services";

export async function checkPostal(
  _prevState: string,
  formData: FormData
): Promise<Outcome> {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return "success";
}
