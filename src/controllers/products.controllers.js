import * as productService from "../services/products.services.js";

// Agregar producto
export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    console.log("[ADD PRODUCT] Datos recibidos:", product);

    if (!product || !product.nombre || !product.categoria || !product.precio) {
      console.warn("[ADD PRODUCT] Datos incompletos:", product);
      return res.status(400).json({ message: "Datos del producto incompletos" });
    }

    const newProduct = await productService.addProductService(product);
    console.log("[ADD PRODUCT] Producto agregado:", newProduct);

    return res.status(200).json(newProduct);
  } catch (error) {
    console.error("[ADD PRODUCT] Error:", error);
    return res.status(500).send();
  }
};

// Eliminar producto
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("[DELETE PRODUCT] ID recibido:", id);

    if (!id) {
      console.warn("[DELETE PRODUCT] ID no proporcionado");
      return res.status(400).json({ message: "ID del producto requerido" });
    }

    await productService.deleteProductService(id);
    console.log("[DELETE PRODUCT] Producto eliminado:", id);

    return res.sendStatus(200);
  } catch (error) {
    console.error("[DELETE PRODUCT] Error:", error);
    return res.status(500).send();
  }
};

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    console.log("[GET ALL PRODUCTS] Petición recibida");

    const products = await productService.getAllProductsService();
    console.log("[GET ALL PRODUCTS] Productos obtenidos:", products);

    return res.status(200).json(products);
  } catch (error) {
    console.error("[GET ALL PRODUCTS] Error:", error);
    return res.status(500).send();
  }
};

// Obtener producto por ID
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("[GET PRODUCT BY ID] ID recibido:", id);

    if (!id) {
      console.warn("[GET PRODUCT BY ID] ID no proporcionado");
      return res.status(400).json({ message: "ID del producto requerido" });
    }

    const product = await productService.getProductByIdService(id);
    if (!product) {
      console.log("[GET PRODUCT BY ID] Producto no encontrado:", id);
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    console.log("[GET PRODUCT BY ID] Producto obtenido:", product);
    return res.status(200).json(product);
  } catch (error) {
    console.error("[GET PRODUCT BY ID] Error:", error);
    return res.status(500).send();
  }
};




