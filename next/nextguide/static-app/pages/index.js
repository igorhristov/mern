import React from "react";
import path from "path";
import fs from "fs/promises";

import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {products.map((product) => (
          <h2 key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </h2>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log("generate");

  if (!data) {
    return {
      redirect: {
        destination: "/home",
      },
    };
  }

  // not found
  if (data.products.length === 0) {
    return { notFount: true };
  }

  return {
    props: {
      products: data.products,
      // products: [
      //   { id: "p1", title: "Product 1" },
      //   { id: "p2", title: "Product 2" },
      // ],
    },
    // in production rebuildit 10 10 secunds
    revalidate: 10,
    // if notFound: true return 404
    // redirect
  };
}

export default HomePage;
