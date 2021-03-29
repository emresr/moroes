import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { CREATE_PRODUCT } from "../../gql/item/mutation";

const CreateProduct = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    name: "",
    price: "",
  });
  const [createProduct] = useMutation(CREATE_PRODUCT, {
    variables: {
      name: formState.name,
      price: parseFloat(formState.price),
    },
  });

  return (
    <div className="mt-2 md:mt-4 mx-4 md:mx-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createProduct();
        }}
      >
        <div className="">
          <input
            className=""
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type="text"
            placeholder="Name"
          />
          <input
            className="mt-2 md:mt-5"
            value={formState.price}
            onChange={(e) =>
              setFormState({
                ...formState,
                price: e.target.value,
              })
            }
            type="text"
            placeholder="Price"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
