import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { MainCart, ImgCart } from "../../css/cssHome";
import { deleteCart } from "../../redux/slice/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);

  return (
    <MainCart>
      <div className="container">
        <h2>
          My Cart (<span>{cart.length}</span>)
        </h2>
        <div className="row">
          <div className="col-8">
            {cart.length > 0 ? (
              cart.map((a, b) => {
                return (
                  <>
                    <div key={b} className="child-cart-1">
                      <div className="child-cart">
                        <div className="cart-item">
                          <ImgCart src={a.imgItem} />
                          <h5>{a.name}</h5>
                        </div>
                        <div className="price-btn">
                          <div>{a.price}$</div>
                          <Button
                            onClick={() => {
                              dispatch(deleteCart(a));
                            }}
                            variant="contained"
                            disableElevation
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <h1> chưa có zề ... MUa Đê</h1>
            )}
          </div>
          <div className="col-4">
            <div>
              <h5>Games and Apps Summary</h5>
              <div className="main-total">
                <div className="d-flex ">
                  <div> price</div>
                  <div>
                    {console.log(cart)}
                    {cart.length > 0
                      ? cart.reduce((a, b) => {
                          return a + b.price;
                        }, 0)
                      : undefined}
                    <span style={{ marginLeft: "10px" }}>$</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>Taxes</div>
                  <div>Calculated at Checkout</div>
                </div>
                <div className="Subtotal d-flex">
                  <div>Subtotal</div>
                  <h5>
                    {cart.length > 0
                      ? cart.reduce((a, b) => {
                          return a + b.price;
                        }, 0)
                      : undefined}
                    <span style={{ marginLeft: "10px" }}>$</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainCart>
  );
};
export default Cart;
