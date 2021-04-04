import React, { useState } from "react";
import { GET_CART } from "../gql/cart/query";
import { DELETE_CARTPRODUCT } from "../gql/cart/mutation";
import { GET_CART_PRODUCTS } from "../gql/cart/subscription";
import { useMutation, useQuery } from "@apollo/client";
import { ImCross } from "react-icons/im";

const Cart = () => {
  const [isCartproductsOpen, setIsCartproductsOpen] = useState(true);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const { data, loading, subscribeToMore } = useQuery(GET_CART, {
    variables: {
      id: 19,
    },
  });
  console.log(data);

  subscribeToMore({
    document: GET_CART_PRODUCTS,
    variables: { cartId: 19 },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;
      const newCartProduct = subscriptionData.data;
      console.log("lmao", newCartProduct);
      return Object.assign({}, prev, {
        cart: {
          cartproducts: [newCartProduct, ...prev.cart.cartproducts],
        },
      });
    },
  });
  const [deleteSome] = useMutation(DELETE_CARTPRODUCT);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <label
          onClick={() => {
            setIsCartproductsOpen(!isCartproductsOpen);
          }}
        >
          <div className="bg-gray-400 p-2">
            <h1 className="text-white text-2xl font-bold">Cart Products</h1>
          </div>{" "}
        </label>
        {isCartproductsOpen && (
          <div className="flex justify-center ">
            <div className="border-2 w-full">
              <h1>Cart</h1>
              {!loading &&
                data &&
                data.cart.cartproducts.map((cartproduct) => (
                  <div
                    key=""
                    className="flex justify-between space-x-4 p-1 w-full "
                  >
                    <div className="">
                      <div>
                        {" "}
                        <img
                          className="rounded w-full"
                          src="https://picsum.photos/50/50/?random"
                        />{" "}
                      </div>
                      <h1 className="my-auto">
                        {cartproduct.product.name} x{cartproduct.amount}
                      </h1>
                    </div>
                    <div className="inline-block">
                      <h1>{cartproduct.product.price}</h1>
                      <button
                        onClick={() =>
                          deleteSome({
                            variables: { cartproductId: cartproduct.id },
                          })
                        }
                      >
                        <div className="bg-red-600 my-auto p-1 rounded-md">
                          <ImCross />
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}{" "}
        <label
          onClick={() => {
            setIsDetailsOpen(!isDetailsOpen);
          }}
        >
          <div className="bg-gray-400 p-2">
            <h1 className="text-white text-2xl font-bold">Details</h1>
          </div>{" "}
        </label>
        {isDetailsOpen && (
          <div className="justify-center">
            <div className="border-2 w-full">
              <h1>Details</h1>
            </div>
          </div>
        )}
        <label
          onClick={() => {
            setIsPaymentOpen(!isPaymentOpen);
          }}
        >
          <div className="bg-gray-400 p-2">
            <h1 className="text-white text-2xl font-bold">Payment</h1>
          </div>{" "}
        </label>
        {isPaymentOpen && (
          <div className="justify-center">
            <div className="border-2 w-full">
              <h1>Payment</h1>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-4">
        Proceed
        <div className="flex justify-center">
          <button className="p-3 bg-green-600 rounded-lg">
            Proceed to Payment{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
