import { selectedPage, NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const Content = document.querySelector("#content");
Content.appendChild(NavBar.NavbarDiv());
Content.appendChild(selectedPage);
Content.appendChild(Footer.footerDiv());
