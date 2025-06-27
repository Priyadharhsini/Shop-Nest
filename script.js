// nav bar script
function myfun(){
     document.querySelector('.right-nav-text').classList.toggle('show');
}
document.querySelector('.main-icon').addEventListener('click',myfun());


// swapping images

  // const testimonials = [
  //   {
  //     img: "./Images/feed1.jpg",
  //     name: "Sri Ram",
  //     role: "UI/UX Designer",
  //     text: "Code99 has been a game-changer for me! The teaching style is super practical, and the mentors really care about making sure we understand the concepts. I especially loved how we worked on real-world projects — it made me feel confident and industry-ready. The environment is also really positive and collaborative. Highly recommend for anyone serious about building a career in tech!"
  //   },
  //   {
  //     img: "./Images/feed2.jpg",
  //     name: "Aditi Sharma",
  //     role: "Frontend Developer",
  //     text: "The mentorship and real-world projects gave me confidence in my skills. The team spirit and support were excellent!"
  //   },
  //   {
  //     img: "./Images/feed3.jpg",
  //     name: "John Doe",
  //     role: "Software Engineer",
  //     text: "The program is very immersive and practical. It helped me land a job within 2 months of completing the course!"
  //   },
  //   {
  //     img: "./Images/feed4.jpg",
  //     name: "Nisha Verma",
  //     role: "Full Stack Developer",
  //     text: "Every module was hands-on, and the instructors made sure we stayed on track. Loved the community too!"
  //   }
    // Add more testimonials if needed
  // ];

  // let currentIndex = 0;

  // const nameEl = document.querySelector('.feedback h2');
  // const roleEl = document.querySelector('.feedback span');
  // const textEl = document.querySelector('.feedback p');
  // const imageEls = document.querySelectorAll('.wrapper-circle img');

  // function updateTestimonial(index) {
  //   const testimonial = testimonials[index];
  //   nameEl.textContent = testimonial.name;
  //   roleEl.textContent = testimonial.role;
  //   textEl.textContent = testimonial.text;

    // Optional: Highlight the current image (if desired)
  //   imageEls.forEach(img => img.classList.remove('active'));
  //   if (imageEls[index]) {
  //     imageEls[index].classList.add('active');
  //   }
  // }

  // document.querySelector('.fa-angle-right').addEventListener('click', () => {
  //   currentIndex = (currentIndex + 1) % testimonials.length;
  //   updateTestimonial(currentIndex);
  // });

  // document.querySelector('.fa-angle-left').addEventListener('click', () => {
  //   currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  //   updateTestimonial(currentIndex);
  // });

  // // Initial load
  // updateTestimonial(currentIndex);

