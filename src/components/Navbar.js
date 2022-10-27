import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MenuPage from "../pages/Menu";

let selectedPage = Home.HomePage();

const Navbar = (navTabsArray) => {
  const navTabs = navTabsArray;

  const NavbarDiv = () => {
    const navbar = document.createElement(`nav`);

    const companyTitle = document.createElement(`h1`);
    companyTitle.textContent = `Khaabay`;
    navbar.appendChild(companyTitle);

    const tabsUl = document.createElement(`ul`);

    navTabs.forEach((tab) => {
      tabsUl.appendChild(tab.NavTabDiv());
    });

    navbar.appendChild(tabsUl);

    return navbar;
  };

  return { NavbarDiv };
};

//page: Div
const NavTab = (tabPage, tabTitle) => {
  const page = tabPage;
  const title = tabTitle;

  const NavTabDiv = () => {
    const tab = document.createElement(`li`);
    tab.textContent = title;
    tab.addEventListener(`click`, () => {
      selectedPage = page;
      const content = document.querySelector("#content");
      const div = content.querySelector("div");
      div.remove();

      content.insertBefore(selectedPage, content.children[1]);
      console.log(title, " clicked");
    });

    return tab;
  };

  return { NavTabDiv };
};

const NavTabs = [
  NavTab(Home.HomePage(), `HOME`),
  NavTab(AboutUs.AboutUsPage(), `ABOUT US`),
  NavTab(Contact.ContactPage(), `CONTACT`),
  NavTab(MenuPage.MenuPage(), `MENU`),
];
const NavBar = Navbar(NavTabs);

export { selectedPage, NavBar };
