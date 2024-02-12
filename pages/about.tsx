import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg">Welcome to About page!</p>
      <div className="mt-4">
        <Link className="text-blue-500 hover:text-blue-700" href="/" passHref>
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default About;
