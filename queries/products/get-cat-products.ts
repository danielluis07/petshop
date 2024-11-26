const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/products/cats`;

export const getCatProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${URL}`);

    if (!res.ok) {
      throw new Error("Failed to fetch cat products");
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};