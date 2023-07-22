export const initHelper = () => {
  const helper = document.querySelector('.helper');
  const activeClass = 'active';

  if (helper) {
    helper.classList.add(activeClass);

    document.addEventListener('keydown', (event) => {
      if (event.key.toLocaleLowerCase() === 'h')
        helper.classList.toggle('active');
    });
  }
};
