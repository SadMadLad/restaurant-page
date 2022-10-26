import SideImg from '../assets/side-img.jpg';

const AboutUs = (() => {
    const AboutUsPage = () => {
        const div = document.createElement(`div`);
        div.classList.add(`about-us`);
        div.classList.add(`section`)

        //Main Passage
        const mainParagraph = document.createElement(`p`);
        mainParagraph.classList.add(`main-paragraph`)
        mainParagraph.textContent = "We all are about good and delicious food!";

        //Central Section
        const centerArea = document.createElement(`div`);
        centerArea.classList.add(`mid-section`);

        const aside = document.createElement(`aside`);
        aside.textContent = `Our main goal is to provide economical, fresh and delicious food from all
        categories, ranging from Sushi to Lahori Broast. The food is prepared by highly qualified chefs
        with love and care. And we do not serve Khota and you can trust us on that :)`;
        
        const img = new Image();
        img.src = SideImg;

        centerArea.appendChild(aside);
        centerArea.appendChild(img);

        div.appendChild(mainParagraph);
        div.appendChild(centerArea);

        return div;
    };

    return {AboutUsPage};
})();

export default AboutUs;