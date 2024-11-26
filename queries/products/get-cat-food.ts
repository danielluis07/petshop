const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/products/cats/food`;

export const getCatFood = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${URL}`);

    if (!res.ok) {
      throw new Error("Failed to fetch cat food");
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
