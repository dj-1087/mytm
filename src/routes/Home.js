import React from "react";
import Navigation from "components/Navigation"
import Search from "components/Search";
//import { dbService } from "fbase";

const Home = () => {
  return (
    <>
      <Search />
      <Navigation />
    </>
  )
}

export default Home;