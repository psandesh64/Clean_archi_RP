import React from "react";
import ProductRepository from "../../infrastructure/repositories/ProductRepository";

// Create a context with a default value or null
export const ProductRepositoryContext = React.createContext<ProductRepository>(new ProductRepository());

// Define the props for the provider component
type ProviderProps = {
  children: React.ReactNode;
};

export const ProductRepositoryProvider = ({ children }: ProviderProps) => {
  const productRepository = new ProductRepository();

  return <ProductRepositoryContext.Provider value={productRepository}>{children}</ProductRepositoryContext.Provider>;
};
