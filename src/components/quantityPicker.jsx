
import "./quantityPicker.css";
import {useState} from 'react';

    function QuantityPicker(){
    function QuantityPicker(props){
       const [quantity, setQuantity] = useState(1);


    function handleIncrease (){
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    function handleDecrease (){
        if (quantity===1) return;
        let nextVal = quantity - 1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }
      return (
        <div className="qty-picker"></div>)
    }}  

    export default QuantityPicker;