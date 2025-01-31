import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className=" container">
        <Link href={"/"}></Link>
      </div>
    </header>
  );
}
