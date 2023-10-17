import React from "react";

export interface Product {
  id?: number;
  product: string;
  price: string;
}

const Products = async () => {
  const response = await fetch(
    "https://652cc55bd0d1df5273efa8c6.mockapi.io/products",
    {
      cache: "no-cache",
    }
  );

  const products: Product[] = await response.json();

  //   function for the post request
  const addProductToDatabase = async (e: FormData) => {
    "use server";

    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if (!product || !price) return null;

    // create a new product
    const newProduct: Product = {
      product,
      price,
    };

    // POST API call is here
    await fetch("https://652cc55bd0d1df5273efa8c6.mockapi.io/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <main>
      <h1 className="flex justify-center items-center mt-5">
        Product Warehouse
      </h1>

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          type="text"
          name="product"
          placeholder="Enter your product name....."
          className="border border-gray-300 p-2 outline-none  rounded-md text-black"
        />
        <input
          type="text"
          name="price"
          placeholder="Enter your product price....."
          className="border border-gray-300 p-2  outline-none rounded-md text-black"
        />

        <button className="border bg-blue-500 p-2 text-white rounded-md">
          Add Product
        </button>
      </form>
      <p className="font-bold p-5">Product List</p>
      <div className="flex flex-wrap gap-5">
        {products.map((item) => (
          <div key={item.id} className="p-5 shadow-lg">
            <p>{item.product}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
