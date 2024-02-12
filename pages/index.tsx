import React from "react";
import ItemList from "../components/ItemList";
import Link from "next/link";
import data from "../data.json";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center mt-5">Home</h1>
      <ItemList items={data} />
      <nav className="text-blue-500 hover:text-blue-700 text-center">
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
};

export default Home;
