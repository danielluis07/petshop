const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/products/dogs/care`;

export const getDogCare = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${URL}`);

    if (!res.ok) {
      throw new Error("Failed to fetch dog care");
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
