import Food_1 from "../assets/food-1.jpg";
import Food_2 from "../assets/food-2.jpg";
import Food_3 from "../assets/food-3.jpg";
import Food_4 from "../assets/food-4.jpg";

const Home = (() => {
  const HomePage = () => {
    const div = document.createElement(`div`);
    div.classList.add(`section`);
    div.classList.add(`home-page`);
    //For Design
    const ellipse_1 = document.createElement(`div`);
    const ellipse_2 = document.createElement(`div`);

    ellipse_1.classList.add(`ellipse`);
    ellipse_1.classList.add(`ellipse-1`);
    ellipse_2.classList.add(`ellipse`);
    ellipse_2.classList.add(`ellipse-2`);
    //Text Content
    const mainParagraph = document.createElement(`p`);
    mainParagraph.textContent = `Check Out Food Of Your Dreams`;
    //Images Div
    const imagesDiv = document.createElement(`div`);
    imagesDiv.classList.add(`images`);

    const img_1 = new Image();
    const img_2 = new Image();
    const img_3 = new Image();
    const img_4 = new Image();

    img_1.id = "food-1";
    img_2.id = "food-2";
    img_3.id = "food-3";
    img_4.id = "food-4";

    img_1.src = Food_1;
    img_2.src = Food_2;
    img_3.src = Food_3;
    img_4.src = Food_4;
    imagesDiv.append(img_1, img_2, img_3, img_4);
    //Appends
    div.appendChild(ellipse_1);
    div.appendChild(ellipse_2);
    div.appendChild(mainParagraph);
    div.appendChild(imagesDiv);

    return div;
  };

  return { HomePage };
})();

export default Home;
