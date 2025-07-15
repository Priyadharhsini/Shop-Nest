// nav bar script
function myfun(){
     document.querySelector('.right-nav-text').classList.toggle('show');
}
document.querySelector('.main-icon').addEventListener('click',myfun());

// customer feedback script
  // const testimonials = [
  //   {
  //     image: "./Images/feed1.jpg",
  //     name: "Sri Ram",
  //     role: "UI/UX Designer",
  //     text: "Code99 has been a game-changer for me! The teaching style is super practical, and the mentors really care about making sure we understand the concepts. I especially loved how we worked on real-world projects — it made me feel confident and industry-ready. The environment is also really positive and collaborative. Highly recommend for anyone serious about building a career in tech!"
  //   },
  //   {
  //     image: "./Images/feed5.jpg",
  //     name: "Ananya Mehra",
  //     role: "Frontend Developer",
  //     text: "The mentorship and hands-on projects helped me improve my coding skills significantly. I enjoyed working in teams and building real apps!"
  //   },
  //   {
  //     image: "./Images/feed6.jpg",
  //     name: "Rahul Nair",
  //     role: "Software Engineer",
  //     text:"From zero to job-ready! Code99's approach made learning feel easy and enjoyable. Loved the project-based training!"
  //   },
  //    {
  //     image: "./Images/feed7.jpg",
  //     name: "Ananya Mehra",
  //     role: "Frontend Developer",
  //     text: "The mentorship and hands-on projects helped me improve my coding skills significantly. I enjoyed working in teams and building real apps!"
  //   },
  //   {
  //     image: "./Images/feed2.jpg",
  //     name: "Rahul Nair",
  //     role: "Software Engineer",
  //     text:"From zero to job-ready! Code99's approach made learning feel easy and enjoyable. Loved the project-based training!"
  //   },
  //   {
  //     image: "./Images/feed3.jpg",
  //     name: "Ananya Mehra",
  //     role: "Frontend Developer",
  //     text: "The mentorship and hands-on projects helped me improve my coding skills significantly. I enjoyed working in teams and building real apps!"
  //   },
  //   {
  //     image: "./Images/feed4.jpg",
  //     name: "Rahul Nair",
  //     role: "Software Engineer",
  //     text:"From zero to job-ready! Code99's approach made learning feel easy and enjoyable. Loved the project-based training!"
  //   }
  // ];

  // let index = 0;

  // function showTestimonial(i) {
  //   const testimonial = testimonials[i];
  //   document.getElementById("feed-circle1").src = testimonial.image;
  //   document.getElementById("feed-circle1").style.border = "10px solid gold";
  //   document.getElementById("customerName").innerText = testimonial.name;
  //   document.getElementById("customerRole").innerText = testimonial.role;
  //   document.getElementById("testimonialText").innerText = testimonial.text;
  // }

  // function nextTestimonial() {
  //   index = (index + 1) % testimonials.length;
  //   showTestimonial(index);
  // }

  // function prevTestimonial() {
  //   index = (index - 1 + testimonials.length) % testimonials.length;
  //   showTestimonial(index);
  // }

  // Initialize first testimonial
  // window.onload = () => showTestimonial(index);


const testimonials = [
  {
    name: "Sri Ram",
    role: "UI/UX Designer",
    text: "Code99 has been a game-changer for me! The teaching style is super practical...",
    image: "./Images/feed1.jpg"
  },
  {
    name: "Aarav Mehta",
    role: "Frontend Developer",
    text: "Fantastic bootcamp! Loved the hands-on experience and the supportive mentors.",
    image: "./Images/feed2.jpg"
  },
  {
    name: "Sneha Reddy",
    role: "Backend Engineer",
    text: "Real-world projects helped me grow so much as a developer.",
    image: "./Images/feed3.jpg"
  },
  {
    name: "Kiran Kumar",
    role: "Data Scientist",
    text: "This experience shaped my career in data science. Highly recommend!",
    image: "./Images/feed4.jpg"
  },
  {
    name: "Reena Thomas",
    role: "Fullstack Developer",
    text: "Amazing learning environment and mentorship. Truly industry-ready.",
    image: "./Images/feed5.jpg"
  }
];

let currentIndex = 0;

function updateTestimonial(direction) {
  const data = testimonials[currentIndex];

  const imageEl = document.querySelector("#activeImage img");
  const nameEl = document.getElementById("customerName");
  const roleEl = document.getElementById("customerRole");
  const textEl = document.getElementById("testimonialText");

  // Add animation class based on direction
  const animateClass = direction === 'left' ? 'slide-from-left' : 'slide-from-right';
  imageEl.classList.add(animateClass);
  nameEl.classList.add(animateClass);
  roleEl.classList.add(animateClass);
  textEl.classList.add(animateClass);

  // Wait for animation before updating
  setTimeout(() => {
    imageEl.src = data.image;
    nameEl.innerText = data.name;
    roleEl.innerText = data.role;
    textEl.innerText = data.text;

    // Remove the animation class to reset
    imageEl.classList.remove(animateClass);
    nameEl.classList.remove(animateClass);
    roleEl.classList.remove(animateClass);
    textEl.classList.remove(animateClass);
  }, 300); // Match this to animation duration
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial('right');
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial('left');
}
