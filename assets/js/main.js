/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),   
      contactEmail = document.getElementById('contact-email'),   
      contactProject = document.getElementById('contact-project'),   
      contactMessage = document.getElementById('contact-message')
      
const sendEmail = (e) => {
    e.preventDefault()

    //check if the field has value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'Write all the input fileds 💌'

    }else{
        //service template form public key
        emailjs.sendForm('service_kgqptqo', 'template_d66hjcb', '#contact-form', 'kXiYR-YsG7Fzj_too')
            .then(() =>{
                //show message and add colour
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent ✅'

                //remove message after five seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED... 😴', error)
            })

        //to clearr the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }

}
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true 
})

sr.reveal(`.home__data, .projects__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100} )
sr.reveal(`.skills__container:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'} )
sr.reveal(`.skills__container:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'} )
sr.reveal(`.qualification__content`, {interval: 100} )
