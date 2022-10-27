const ContactInfo = (personPic, personName, personDesc, personPhone, personMail) => {
    const pic = personPic;
    const name = personName;
    const phone = personPhone;
    const mail = personMail;
    const desc = personDesc;

    const detailsCreator = (text, className, tag) => {
        const textTag = document.createElement(tag);
        textTag.id = className;
        textTag.textContent = text;

        return textTag;
    }

    const ContactProfile = () => {
        const div = document.createElement(`div`);
        div.classList.add(`profile`);
        //Avatar
        const avatar = new Image();
        avatar.src = pic;
        avatar.classList.add(`avatar`);
        //Contact Details
        const details = document.createElement(`div`);
        details.classList.add(`details`)
        
        const nameTag = detailsCreator(name, `name`, `p`);
        const detailsTag = detailsCreator(desc, 'desc', `p`);
        const phoneTag = detailsCreator(phone, `phone`, `p`);
        const mailTag = detailsCreator(mail, `mail`, `p`);
    
        details.append(nameTag, detailsTag, phoneTag, mailTag);
        //Appends
        div.append(avatar, details);
        return div;
    }

    return {ContactProfile};
}

export default ContactInfo;