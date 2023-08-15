const DrawerInitiator = {
  init({ button, content }) {
    button.addEventListener('click', (event) => {
      button.classList.toggle('open');
      event.stopPropagation();
    });

    content.addEventListener('click', (event) => {
      button.classList.remove('open');
      event.stopPropagation();
    });
  },
};

export default DrawerInitiator;
