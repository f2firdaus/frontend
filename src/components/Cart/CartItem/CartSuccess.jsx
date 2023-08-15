import React, { useContext } from 'react'
import "./CartSuccess.scss";
import { Context } from '../../../utils/context';
const CartSuccess = () => {
  
  // const { showSuccess } = useContext(Context);
  return (
  <>  <div className='success'>
          <div className="order">
              Your order Has been Placed Successfully
          </div>
    </div> 
    
    </>

      )
}

export default CartSuccess