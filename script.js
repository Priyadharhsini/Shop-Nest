// nav bar script
function myfun(){
     document.querySelector('.right-nav-text').classList.toggle('show');
}
document.querySelector('.main-icon').addEventListener('click',myfun());

// customer feedback script
  const testimonials = [
    {
      image: "./Images/feed1.jpg",
      name: "Sri Ram",
      role: "UI/UX Designer",
      text: "Code99 has been a game-changer for me! The teaching style is super practical, and the mentors really care about making sure we understand the concepts. I especially loved how we worked on real-world projects — it made me feel confident and industry-ready. The environment is also really positive and collaborative. Highly recommend for anyone serious about building a career in tech!"
    },
    {
      image: "./Images/feed5.jpg",
      name: "Ananya Mehra",
      role: "Frontend Developer",
      text: "The mentorship and hands-on projects helped me improve my coding skills significantly. I enjoyed working in teams and building real apps!"
    },
    {
      image: "./Images/feed6.jpg",
      name: "Rahul Nair",
      role: "Software Engineer",
      text:"From zero to job-ready! Code99's approach made learning feel easy and enjoyable. Loved the project-based training!"
    },
     {
      image: "./Images/feed7.jpg",
      name: "Ananya Mehra",
      role: "Frontend Developer",
      text: "The mentorship and hands-on projects helped me improve my coding skills significantly. I enjoyed working in teams and building real apps!"
    },
    {
      image: "./Images/feed2.jpg",
      name: "Rahul Nair",
      role: "Software Engineer",
      text:"From zero to job-ready! Code99's approach made learning feel easy and enjoyable. Loved the project-based training!"
    },
    {
      image: "./Images/feed3.jpg",
      name: "Ananya Mehra",
      role: "Frontend Developer",
      text: "The mentorship and hands-on projects helped me improve my coding skills significantly. I enjoyed working in teams and building real apps!"
    },
    {
      image: "./Images/feed4.jpg",
      name: "Rahul Nair",
      role: "Software Engineer",
      text:"From zero to job-ready! Code99's approach made learning feel easy and enjoyable. Loved the project-based training!"
    }
  ];

  let index = 0;

  function showTestimonial(i) {
    const testimonial = testimonials[i];
    document.getElementById("feed-circle1").src = testimonial.image;
    document.getElementById("feed-circle1").style.border = "10px solid gold";
    document.getElementById("customerName").innerText = testimonial.name;
    document.getElementById("customerRole").innerText = testimonial.role;
    document.getElementById("testimonialText").innerText = testimonial.text;
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  }

  // Initialize first testimonial
  window.onload = () => showTestimonial(index);
