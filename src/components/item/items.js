import React, { useState } from "react";
import { GET_PRODUCTS } from "../../gql/product/query";
import { DELETE_PRODUCT } from "../../gql/product/mutation";
import { useQuery, useMutation } from "@apollo/client";

const Products = () => {
  const tableName = "items";
  const TableHeads = ["Name", "Price", "ID", "Actions"];

  const { data, loading } = useQuery(GET_PRODUCTS);
  console.log(data);

  const [deleteSome, { deleted }] = useMutation(DELETE_PRODUCT);

  return (
    <div>
      <div className="flex justify-end mt-2 md:mt-5">
        <button class="flex items-center  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          Add Product
          <span class="ml-2" aria-hidden="true">
            +
          </span>
        </button>
      </div>
      <div>
        <table class="border-collapse w-full md:mt-10">
          <thead>
            <tr>
              {TableHeads.map((head) => (
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!loading &&
              data &&
              data.products.map((data) => (
                <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Company name
                    </span>
                    {data.name}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Country
                    </span>
                    {data.price}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Status
                    </span>
                    <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">
                      {data.id}
                    </span>
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static lg:space-x-1">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Actions
                    </span>
                    <button
                      onClick={() => {
                        deleteSome({ variables: { id: data.id } });
                      }}
                      class="text-black p-1 rounded bg-red-500 hover:bg-red-400 "
                    >
                      Delete
                    </button>
                    <button class="text-black p-1 rounded bg-blue-500 hover:bg-blue-400 ">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Products;
