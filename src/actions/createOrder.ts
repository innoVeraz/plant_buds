"use server";

export const createOrder = async (formData: FormData) => {
  console.log(formData.getAll("products"));

  return true;
};
