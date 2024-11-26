const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/categories`;

export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${URL}`);

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
