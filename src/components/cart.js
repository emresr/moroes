import React, { useState } from "react";
import { ME } from "../gql/user/query";
import { GET_CART } from "../gql/cart/query";
import { DELETE_CARTPRODUCT, CREATE_ORDER } from "../gql/cart/mutation";
import { GET_CART_PRODUCTS } from "../gql/cart/subscription";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { ImCross } from "react-icons/im";
import Cards from "react-credit-cards";

const Cart = () => {
   const [isCartproductsOpen, setIsCartproductsOpen] = useState(true);
   const [isDetailsOpen, setIsDetailsOpen] = useState(false);
   const [isPaymentOpen, setIsPaymentOpen] = useState(true);

   const { data: me, loading: meLoading } = useQuery(ME);
   !meLoading && console.log("ME", me.me.activeCart);
   let activeCart = meLoading ? 0 : me.me.activeCart;
   console.log(activeCart);

   const { data, loading, subscribeToMore } = useQuery(GET_CART, {
      variables: {
         id: 1,
      },
   });
   console.log(data);

   subscribeToMore({
      document: GET_CART_PRODUCTS,
      variables: { cartId: 1 },
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
   const [createOrder] = useMutation(CREATE_ORDER);

   //Payment
   const [card, setCard] = useState({
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
   });

   const handleInputFocus = (e) => {
      setCard({ focus: e.target.name });
   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;

      setCard({ [name]: value });
   };

   return (
      <div className="grid grid-cols-12">
         <div className="col-span-8">
            <label
               onClick={() => {
                  setIsCartproductsOpen(!isCartproductsOpen);
               }}
            >
               <div className="bg-gray-400 p-2">
                  <h1 className="text-white text-2xl font-bold">
                     Cart Products
                  </h1>
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
                                    {cartproduct.product.name} x
                                    {cartproduct.amount}
                                 </h1>
                              </div>
                              <div className="inline-block">
                                 <h1>$ {cartproduct.product.price}</h1>
                                 <button
                                    onClick={() => {
                                       deleteSome({
                                          variables: {
                                             cartproductId: cartproduct.id,
                                          },
                                       });
                                       window.location.reload();
                                    }}
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
                     <div id="PaymentForm">
                        <Cards
                           cvc={card.cvc}
                           expiry={card.expiry}
                           focused={card.focus}
                           name={card.name}
                           number={card.number}
                        />
                        <form>
                           <input
                              type="tel"
                              name="number"
                              placeholder="Card Number"
                              onChange={handleInputChange}
                              onFocus={handleInputFocus}
                           />
                        </form>
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div className="col-span-4">
            Proceed
            <div className="flex justify-center">
               <div>
                  <button className="p-3 bg-green-600 rounded-lg">
                     Proceed to Payment{" "}
                  </button>
                  <button
                     onClick={() => {
                        createOrder({
                           variables: {
                              id: 1,
                           },
                        });
                     }}
                     className="p-3 bg-green-600 rounded-lg "
                  >
                     Create Order
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Cart;
