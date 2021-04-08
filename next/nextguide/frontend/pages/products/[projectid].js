import React from "react";
import { useRouter } from "next/router";

const ProductProjectPage = () => {
  const router = useRouter();

  router.pathname;
  console.log(router.pathname)
  console.log(router.query)

  // send arequest to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>id page</h1>
    </div>
  );
};

export default ProductProjectPage;
