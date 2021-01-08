import React from "react";

const Footer = () => {
  return (
    <footer className="py-1 bg-dark">
      <p className=" text-center text-white mt-1">
        Eshop {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
