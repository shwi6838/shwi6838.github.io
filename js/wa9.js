const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 75 fahrenheit outside, so Bob went for a walk. After walking for hours, they stumbled upon :inserty:. Excited, Bob went inside to discover a genie that looked exactly like :insertx:. The great genie :insertx: asked Bob: I can grant you one wish, choose wisely. Bob thought a moment, and made his wish. "Check your pockets." :insertx: said. Bob felt his pocket and pulled out :insertz:. It weighed 30 pounds.';
const insertX = ['Pennywise the Clown', 'His Daddy', 'Will Ferrel'];
const insertY = ['the Tardis', 'a bright yellow house', 'a petting zoo'];
const insertZ = ['a fistful of spaghetti', 'a lead pipe', 'a snarling poodle named Mittens'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('75 fahrenheit', temperature);
    newStory = newStory.replaceAll('30 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}