const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/products/new-products`;

export const getNewProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${URL}`);

    if (!res.ok) {
      throw new Error("Failed to fetch new products");
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
