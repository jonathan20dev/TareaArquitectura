import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../datos/Firebase';
//(╯°□°）╯︵ ┻━┻
const deleteProduct = async (producto) => {
  alert('Borró: ' + producto.name + ' (╯°□°）╯︵ ┻━┻');
  const productDoc = doc(db, 'productos', producto.id);
  await deleteDoc(productDoc);
}
export { deleteProduct }
