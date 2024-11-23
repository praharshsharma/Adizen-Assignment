import React from "react"
import ProductCard from "../components/ProductCard";

const Main = ()=>{
    const products = [
        {
          name: "Product 1",
          price: "29.99",
          image: "https://via.placeholder.com/300x200",
          description: "This is a short description of Product 1."
        },
        {
          name: "Product 2",
          price: "49.99",
          image: "https://via.placeholder.com/300x200",
          description: "This is a short description of Product 2."
        },
        {
          name: "Product 3",
          price: "19.99",
          image: "https://via.placeholder.com/300x200",
          description: "This is a short description of Product 3."
        },
        {
          name: "Product 4",
          price: "99.99",
          image: "https://via.placeholder.com/300x200",
          description: "This is a short description of Product 4."
        },
        {
          name: "Product 1",
          price: "29.99",
          image: "https://via.placeholder.com/300x200",
          description: "This is a short description of Product 1."
        },
        {
          name: "Product 2",
          price: "49.99",
          image: "https://via.placeholder.com/300x200",
          description: "This is a short description of Product 2."
        },
        {
          name: "Product 3",
          price: "19.99",
          image: "https://via.placeholder.com/300x200",
          description: "This is a short description of Product 3."
        },
        {
          name: "Product 4",
          price: "99.99",
          image: "https://via.placeholder.com/300x200",
          description: "This is a short description of Product 4."
        }
      ];
    return (
        <>
            <div>

{/* Product Grid */}
<div className="product-grid">
  {products.map((product, index) => (
    <ProductCard
      key={index}
      name={product.name}
      price={product.price}
      image={product.image}
      description={product.description}
    />
  ))}
</div>

</div>
        </>
    )
}

export default Main;

