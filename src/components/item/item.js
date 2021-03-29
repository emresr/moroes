import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../../gql/product/query";
import { useQuery } from "@apollo/client";

const Product = () => {
  const url = useParams();
  console.log(url);
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: {
      id: parseInt(url.id),
    },
  });
  console.log(data);
  {
    loading && (
      <button class="animate-spin inline-block py-4 px-8 bg-yellow-500 text-yellow-100 rounded-lg"></button>
    );
  }
  return (
    <div>
      {data && (
        <div>
          <h1> Product Name {data.item.name}</h1>

          <h1> Product Price {data.item.price}</h1>
        </div>
      )}
    </div>
  );
};

export default Product;
