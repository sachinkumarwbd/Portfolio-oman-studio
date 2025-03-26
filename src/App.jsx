import { useState } from "react";
import Pageone from "./pages/Pageone";
import Header from "./components/Header";
import Pagetwo from "./pages/Pagetwo";
import Pagethree from "./pages/Pagethree";
import Pagefour from "./pages/Pagefour";
import Pagefive from "./pages/Pagefive";
import Pagesix from "./pages/Pagesix";
import Pageseven from "./pages/Pageseven";
import Pageeight from "./pages/Pageeight";
import Pagenine from "./pages/Pagenine";
import Pagetenth from "./pages/Pagetenth";
import Pageeleven from "./pages/Pageeleven";
import Pagetwelth from "./pages/Pagetwelth";
import Page13 from "./pages/Page13";

function App() {
  return (
    <>
      <div>
        <Header />
        <Pageone />
        <Pagetwo />
        <Pagethree />
        <Pagefour />
        <Pagefive />
        <Pagesix />
        <Pageseven/>
        <Pageeight />
        <Pagenine />
        <Pagetenth />
        <Pageeleven />
        <Pagetwelth />
        <Page13 />
      </div>
    </>
  );
}

export default App;
