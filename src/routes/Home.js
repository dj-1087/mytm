import React from "react";
import Navigation from "components/Navigation"
import Search from "components/Search";
import MenuIcon from '@material-ui/icons/Menu';
//import { dbService } from "fbase";

const Home = (isLoggedIn) => {
  return (
    <>
      <button id = '메뉴'>
      <MenuIcon color="primary"/>
      <Navigation />
      </button>
      <Search />

      </>

  )
}

export default Home;