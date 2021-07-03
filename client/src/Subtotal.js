import React from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
import { getSubtotal } from "./reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory()
    const [state, dispatch] = useStateValue()

      return (
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <div>
                <p>
                  Subtotal ({state.cart.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </div>
            )}
            decimalScale={2}
            value={getSubtotal(state.cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
    
          <button onClick={e => {history.push("/checkout")}} >Proceed to Checkout</button>
        </div>
    );
}


export default Subtotal