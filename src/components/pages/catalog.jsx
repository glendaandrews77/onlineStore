import { useEffect, useState } from 'react';
import Product from '../product';
import DataService from './services/dataService';
import "./catalog.css";


function Catalog(){
    const [products, setProdcuts] = useState([]);

    function loadCatalog (){
        let service = new DataService();
        let prodList = service.getCatalog();
        setProdcuts(prodList);
    }

    //when the component loads
    useEffect(() => {
        console.log("catalog loaded");
        loadCatalog()
         },[]);

     return (
        <div className="catalog">
            <h3>Welcome to the Heels World!</h3>

              <h5>We Have{products.length} Amazing New Sexy Heels Available Now</h5>
            <div className="products">
                {products.map((prod) => (
                <Product key={prod._id} data={prod} />
                ))}
            </div>
        </div>
     );
};


export default Catalog;