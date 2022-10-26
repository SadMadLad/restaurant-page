import MenuItem from "../components/MenuItem";

import Food_1 from "../assets/food-1.jpg";
import Food_2 from "../assets/food-2.jpg";
import Food_3 from "../assets/food-3.jpg";
import Food_4 from "../assets/food-4.jpg";
import Food_5 from "../assets/food-5.jpg";
import Food_6 from "../assets/food-6.jpg";
import Food_7 from "../assets/food-7.jpg";
import Food_8 from "../assets/food-8.jpg";

const Menu = (menuItems) => {
  const items = menuItems;

  const MenuPage = () => {
    const div = document.createElement(`div`);
    div.classList.add(`section`);
    div.classList.add(`menu`);

    items.forEach((item) => div.appendChild(item.MenuItemCell()));

    return div;
  };

  return { MenuPage };
};

const items = [
  MenuItem(Food_1, `Yummy Food`, 45),
  MenuItem(Food_2, `Gummy Bood`, 95),
  MenuItem(Food_3, `Tummy Dood`, 105),
  MenuItem(Food_4, `Slummy Nood`, 25),
  MenuItem(Food_5, `Dummy Chood`, 45),
  MenuItem(Food_6, `Fummy Tood`, 45),
  MenuItem(Food_7, `Jummy Jood`, 45),
  MenuItem(Food_8, `Lummy Zood`, 45),
  MenuItem(Food_7, `Jummy Jood`, 45),
  MenuItem(Food_8, `Lummy Zood`, 45),
];

const MenuPage = Menu(items);

export default MenuPage;
