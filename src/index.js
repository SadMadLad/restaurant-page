import { selectedPage, NavBar } from "./components/Navbar";

const Content = document.querySelector("#content");
Content.appendChild(NavBar.NavbarDiv());
Content.appendChild(selectedPage);