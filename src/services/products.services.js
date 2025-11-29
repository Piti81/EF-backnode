import { agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "../models/products.models.js";

// Agregar un producto
export const addProductService = async (product) => {
  try {
    const newProduct = await agregarProducto(product);
    return newProduct;
  } catch (error) {
    throw new Error(`Error en addProductService: ${error.message}`);
  }
};

// Eliminar un producto por ID
export const deleteProductService = async (id) => {
  try {
    await eliminarProducto(id);
  } catch (error) {
    throw new Error(`Error en deleteProductService: ${error.message}`);
  }
};

// Obtener todos los productos
export const getAllProductsService = async () => {
  try {
    const products = await obtenerProductos();
    return products;
  } catch (error) {
    throw new Error(`Error en getAllProductsService: ${error.message}`);
  }
};

// Obtener un producto por ID
export const getProductByIdService = async (id) => {
  try {
    const product = await obtenerProducto(id);
    return product;
  } catch (error) {
    throw new Error(`Error en getProductByIdService: ${error.message}`);
  }
};
