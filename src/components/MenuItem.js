const MenuItem = (imgSource, itemName, itemPrice) => {
    const src = imgSource;
    const name = itemName;
    const price = itemPrice;

    const MenuItemCell = () => {
        const div = document.createElement(`div`);
        div.classList.add(`menu-item`);

        //Img
        const img = new Image();
        img.src = src;
        
        //Item Details        
        const details = document.createElement(`div`);
        details.classList.add(`details`);

        const nameDisplay = document.createElement(`p`);
        nameDisplay.textContent = name;
        const priceDisplay = document.createElement(`p`);
        priceDisplay.textContent = `$${price}`;

        details.append(nameDisplay, priceDisplay);
        //Append
        div.append(img, details);
        return div;
    };
}

export default MenuItem;