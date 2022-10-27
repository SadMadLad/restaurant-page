import ContactInfo from "../components/ContactInfo";

import Scorpion from "../assets/scorpion.jpg";
import SubZero from "../assets/sub-zero.jpg";
import Antoine from "../assets/antoine.png";
import Tommy from "../assets/tommy.jpg";

import Food from "../assets/food-wallpaper.jpg";

const Contact = (() => {
  const ContactPage = () => {
    const div = document.createElement(`div`);
    div.classList.add(`section`);
    div.classList.add(`contact-us`);
    //Right Side

    //Img
    const aside = document.createElement(`aside`);
    const img = document.createElement(`img`);
    img.src = Food;

    aside.append(img);
    //Contacts
    const section = document.createElement(`section`);

    const scorpion = ContactInfo(
      Scorpion,
      `Scorpion`,
      `Head of the BBQ Section`,
      `0335-H3LLC00L`,
      `scorpion@netherrealm.com`
    ).ContactProfile();
    const subzero = ContactInfo(
      SubZero,
      `Sub-Zero`,
      `King of Desserts`,
      `0335-FR33Z3`,
      `subzero@linkuei.com`
    ).ContactProfile();
    const antoine = ContactInfo(
      Antoine,
      `Chef Antoine`,
      `Will make you Dinner`,
      `0331-BU77AH`,
      `antoine@deadrising2.com`
    ).ContactProfile();
    const tommy = ContactInfo(
        Tommy,
        `Tommy Vercetti`,
        `Keeps his Friends Close`,
        `0331-V3RC3771`,
        `tommy1951@vercettigang.com`
      ).ContactProfile();

    section.append(scorpion, subzero, antoine, tommy);
    //Appends
    div.append(section, aside);

    return div;
  };

  return { ContactPage };
})();

export default Contact;
