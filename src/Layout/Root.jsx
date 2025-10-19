import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LateastNews from "../Components/LateastNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../OutletPages/LeftAside";
import RightAside from "../OutletPages/RightAside";

const Root = () => {
  return (
    <div>
      <header>
        <nav className="w-11/12 mx-auto">
          <Header></Header>
        </nav>
        <section className="w-11/12 mx-auto">
          <LateastNews></LateastNews>
        </section>
        <section className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-11/12 grid grid-cols-12 mx-auto my-4 gap-4">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
