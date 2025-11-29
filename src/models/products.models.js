import { db } from "../data/data.js";
import { doc, getDoc, collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";

// Obtener un producto por ID
export async function obtenerProducto(id) {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null; // Retorna null si no existe

    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    console.error("Error al obtener producto:", error);
    throw error;
  }
}

// Obtener todos los productos
export async function obtenerProductos() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
}

// Agregar un nuevo producto
export async function agregarProducto(producto) {
  try {
    const docRef = await addDoc(collection(db, "products"), producto);
    return { id: docRef.id, ...producto };
  } catch (error) {
    console.error("Error al agregar producto:", error);
    throw error;
  }
}

// Eliminar un producto por ID
export async function eliminarProducto(id) {
  try {
    await deleteDoc(doc(db, "products", id));
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
  }
}
