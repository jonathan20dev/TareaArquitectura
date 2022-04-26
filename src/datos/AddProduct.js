import { addDoc, collection } from 'firebase/firestore';
import { db } from '../datos/Firebase';
//( ´･･)ﾉ(._.`)
const productosC = collection(db, 'productos');
const addProducto = async (product) => {
  console.log('add', product);
  await addDoc(productosC, product);
};

export { addProducto };
