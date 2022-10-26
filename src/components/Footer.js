const FooterClass = () => {
  const footerDiv = () => {
    const footer = document.createElement(`footer`);
    footer.textContent = "Checkout Out Menu";

    return footer;
  };

  return { footerDiv };
};

const Footer = FooterClass();

export { Footer };
