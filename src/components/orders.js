import React from "react";
import { GET_ORDERS } from "../gql/order/query";
import { useQuery } from "@apollo/client";
import countdown from "countdown";
const Orders = () => {
   const { data, loading } = useQuery(GET_ORDERS, {
      variables: {
         picked: false,
      },
   });
   console.log(data);
   const lmao = countdown(new Date(2000, 0, 1)).toString();

   return (
      <div className="py-5 flex">
         <div className="w-2/3">
            <h1 className="text-2xl text-red-800 flex justify-center">
               Waiting orders {lmao}
            </h1>
            <div className="mx-10 space-y-5">
               {!loading &&
                  data &&
                  data.orders.map((order) => (
                     <div className="border ">
                        <div>
                           {order.cart.cartproducts.map((cartproduct) => (
                              <h1>
                                 x{cartproduct.amount}
                                 <span className="font-semibold">
                                    {" "}
                                    {cartproduct.product.name}
                                 </span>
                              </h1>
                           ))}
                        </div>
                        <h1>${order.cart.total}</h1>
                     </div>
                  ))}
            </div>
         </div>
         <div className="w-1/3">Info</div>
      </div>
   );
};

export default Orders;
