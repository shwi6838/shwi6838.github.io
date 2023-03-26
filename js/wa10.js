const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['car1.jpg', `car2.jpg`, `car3.jpg`, `car4.jpg`, `car5.jpg`];
/* Need array for image names and alt text */
const alts = 
[
    'Car in blue light',
    'car in white light',
    'car in low contrast',
    'car in part red light',
    'car in full red light'
]

/* Looping through images */

for (let i=0; i<5; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', '/img/' + images[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    /* need to apply click event to new image */
    newImage.addEventListener('click', e => 
    {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

/* const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage); */

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click' , () => {
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark')
    {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5';

    }
    else
    {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});