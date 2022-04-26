//Components
import {ProductList} from './interfaz/ProductList'
import {Detail} from './interfaz/Detail'
import {AddProduct } from './interfaz/AddProduct'
import { Header } from './interfaz/Header'
import { ProductState } from './negocio/context/Product/ProductState'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
          <Header/>
    <ProductState>
      <AddProduct/>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-7">
            <ProductList/>
            </div>
            <div className="col-md-5">
            <Detail/>
            </div>
          </div>
        </div>
    </ProductState>
    </>
    
  );
}

export default App;
