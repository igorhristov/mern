import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">Igor</Link>
      </div>
      <div>Next Tutorilas</div>
      <nav>
        <ul>
          <li>
            <Link href="/event/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
