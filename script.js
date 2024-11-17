let left = document.querySelector('.left');
let about = document.querySelector('#about');
let about_left = document.querySelector('.about_left');
let section = document.querySelector('.section');
let blog = document.querySelector('#blog');
let blog_section = document.querySelector('.blog_section');
let right = document.querySelector('.right');
about.addEventListener('click', remove_left);
function remove_left() {
left.style.display = 'none';
blog_section.style.display = 'none';
about_left.style.display = 'flex';
about_left.style.flexDirection = 'column';
section.style.gap = '3rem';
right.style.display = 'block';
// window.addEventListener('resize', handleMediaQuery);
}

blog.addEventListener('click', blog_left);
function blog_left() {
left.style.display = 'none';
about_left.style.display = 'none';
right.style.display = 'none';
blog_section.style.display = 'flex';
blog_section.style.flexDirection = 'column';
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
let 
function submitForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  if(name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    alert('Thank you for your message');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
}

//   function handleMediaQuery() {
//   if (window.matchMedia("(max-width: 960px)").matches) {
//     right.style.display = 'none';
//     about_left.style.width = '100%';
//   } else if(window.matchMedia("(min-width: 960px)").matches) {
//     right.style.display = 'block';
//     about_left.style.width = 'auto';
//   }
// }