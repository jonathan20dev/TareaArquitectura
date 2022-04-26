import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
//(☞ﾟヮﾟ)☞ 
const productosC = collection(db, 'productos');
const getElements = async () => {
  const productoSP = await getDocs(productosC);
  
  return  productoSP.docs.map((element) => ({ ...element.data(), id: element.id }))
  
};

export { getElements };