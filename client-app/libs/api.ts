import { Product } from "@/type";

const API_URL = "https://fakestoreapi.com";

// Get all Products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.log("Network response was not ok", error);
    throw error;
  }
};

// Get single Product
export const getProduct = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.log(`Failed to fetch product with ID ${id}:`, error);
    throw error;
  }
};

// Get all Categories
export const getCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.log("Network response was not ok", error);
    throw error;
  }
};
