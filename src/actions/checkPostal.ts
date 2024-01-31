"use server";

import { Outcome } from "@/components/PostalNumberForm/Outcome";

export async function checkPostal(
  prevState: string,
  formData: FormData
): Promise<Outcome> {
  console.log("check", formData);

  return "success";

  // export async function checkPostal(
  //   _prevState: string,
  //   formData: FormData
  // ): Promise<Outcome> {
  //   await new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 3000);
  //   });
}
