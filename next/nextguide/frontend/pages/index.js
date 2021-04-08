import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      Hello FROM HOME PAGE
      <ul>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/event">Event</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
