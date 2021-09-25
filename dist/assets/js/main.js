// We are going to keep track of the header and section one
// so we get them from the document
const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

//THe options we are using in the Observer, we collect in an object
const sectionOneOptions = {
  rootMargin: '-150px 0px 0px 0px',
};

// Set up the Observer for section one
const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    });
  },
  sectionOneOptions
);

sectionOneObserver.observe(sectionOne);
