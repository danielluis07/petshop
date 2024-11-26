type Product = {
  product: {
    id: string;
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
    description: string | null;
    price: number;
    petId: string;
    categoryId: string;
    stock: number;
    slug: string;
    isNew: boolean | null;
    isFeatured: boolean | null;
    imageUrl: string | null;
  };
  pet: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
};

type Category = {
  id: string;
  name: string;
  image: string;
};
