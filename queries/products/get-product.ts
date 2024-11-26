const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/products/slug`;

export const getProduct = async (slug: string): Promise<Product> => {
  try {
    const res = await fetch(`${URL}/${slug}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch product with slug: ${slug}`);
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
