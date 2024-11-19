let left = document.querySelector('.left');
let about = document.querySelector('#about');
let about_left = document.querySelector('.about_left');
let section = document.querySelector('.section');
let blog = document.querySelector('#blog');
let blog_section = document.querySelector('.blog_section');
let right = document.querySelector('.right');
let project_btn = document.querySelector('.projects');
let project_container = document.querySelector('.project_container');
let header = document.querySelector('.header');

about.addEventListener('click', remove_left);
function remove_left() {
left.style.display = 'none';
blog_section.style.display = 'none';
about_left.style.display = 'flex';
about_left.style.flexDirection = 'column';
section.style.gap = '3rem';
right.style.display = 'block';
project_container.style.display = 'none';
}

blog.addEventListener('click', blog_left);
function blog_left() {
left.style.display = 'none';
about_left.style.display = 'none';
right.style.display = 'none';
blog_section.style.display = 'flex';
blog_section.style.flexDirection = 'column';
project_container.style.display = 'none';
}
let container = document.querySelector('.container');
function talkForm() {
let talk_form = document.querySelector('.talk_form');
talk_form.style.display = 'flex';
document.getElementById('loginOverlay').style.display = 'block';
}
function closeForm() {
let talk_form = document.querySelector('.talk_form');
talk_form.style.display = 'none';
document.getElementById('loginOverlay').style.display = 'none';
}

// project_btn.addEventListener('click', project_left);
// function project_left() {
// left.style.display = 'none';
// about_left.style.display = 'none';
// right.style.display = 'none';
// blog_section.style.display = 'none';
// project_container.style.display = 'flex';
// header.style.marginBottom = '1rem';
// }

let contactForm = document.querySelector('.contact_box');
let contact1 = document.querySelector('#contact');
contact1.addEventListener('click', contact);
function contact() {  
contactForm.style.display = 'flex';
document.getElementById('loginOverlay').style.display = 'block';
}
let close_contact1 = document.querySelector('#close_contact');
close_contact1.addEventListener('click', close_contact);
function close_contact() {   
contactForm.style.display = 'none';
document.getElementById('loginOverlay').style.display = 'none';
}

// function submitForm() {
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let message = document.getElementById('message').value;
//   if(name === '' || email === '' || message === '') {
//     alert('Please fill in all fields');
//   } else {

//     alert('Thank you for your message');
//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('message').value = '';
//   }
// }
