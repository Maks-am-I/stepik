window.addEventListener("DOMContentLoaded", () => {
  initSectionNav('section2')
})

function initSectionNav(sectionId) {
  const section = document.getElementById(sectionId);
  const nav = section.querySelector('.subnav');
  const links = [...nav.querySelectorAll('a')];
  const subSections = links.map(link => section.querySelector(
    link.getAttribute('href')
  ))

  const navHeight = nav.getBoundingClientRect().height;

  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const elY = subSections[index].getBoundingClientRect().y;

      window.scrollTo({
        behavior: 'smooth',
        top: window.scrollY + elY - navHeight
      })
    })
  })

  window.addEventListener('scroll', () => {
  let active = -1;

  active = subSections.findIndex(subSection => {
    let elY = subSection.getBoundingClientRect().y
    let elHeight = subSection.getBoundingClientRect().height

    if (elY <= navHeight && elY + elHeight > navHeight) {
      return true
    }
  })

  links.forEach(link => {
    link.classList.remove('active')
  })

  if (active >=0 ) {
    links[active].classList.add('active')
  }
})
}

// subnav color

