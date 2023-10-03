import React from "react";
import Header from "../sheard/header/Header";
import Navbar from "../sheard/navbar/Navbar";
import LeftSideNav from "../sheard/leftSideNav/LeftSideNav";
import RightSideNav from "../sheard/rightSiteNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h2 className="font-poppins text-4xl font-bold">Home 1</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border"><LeftSideNav/></div>
        <div className="md:col-span-2 border">News coming soon </div>
        <div className="border"><RightSideNav/></div>
      </div>
    </div>
  );
};

export default Home;
