import React from "react";
/*var express = require('express')
var app = express()
var fs = require('fs');
var template = require('./lib/template.js');*/
import Navigation from "components/Navigation"
import Search from "components/Search";
import MenuIcon from '@material-ui/icons/Menu';
//import { dbService } from "fbase";
// 메인화면은 여기고 메뉴 버튼 클릭시 네비게이션 메뉴 나오게
const Home = (isLoggedIn) => {
 /* app.get('/', function(request, response) { 
    fs.readdir('./data', function(error, filelist){
      var title = 'Welcome';
      var description = 'Hello, Node.js';
      var list = template.list(filelist);
      var html = template.HTML(title, list,
        `<h2>${title}</h2>${description}`,
        `<a href="/create">create</a>`
      ); 
      response.send(html);
    });
  });
   
  app.get('/page', function(req, res) { 
    return res.send('/page');
  });
   
  app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
  });*/
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