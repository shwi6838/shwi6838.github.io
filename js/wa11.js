const RiddleButton = document.querySelector('#js-new-riddle');
RiddleButton.addEventListener('click', getRiddle);
const AnswerButton = document.querySelector('#js-answer');
const SettingButton = document.querySelector('#js-setting');
SettingButton.addEventListener('click', changeSetting);
const heading = document.querySelector('#Riddler');

const colors = ['rgb(83, 156, 83)','rgb(81, 184, 184)','rgb(240, 240, 183)','rgb(108, 106, 106)','rgb(227, 144, 71)'];
const titles = {
    'rgb(83, 156, 83)': 'Forest Riddle Spirit',
    'rgb(81, 184, 184)': 'Ocean Riddle Serpent',
    'rgb(240, 240, 183)': 'Desert Riddle Lord',
    'rgb(108, 106, 106)': 'Cavern Riddle Dungeon Keeper',
    'rgb(227, 144, 71)': 'Canyon River Troll',
}
//const titles = [
//    'Forest Riddle Spirit',
//    'Ocean Riddle Serpent',
//    'Desert Riddle Lord',
//    'Cavern Riddle Dungeon Keeper',
//]

const endpoint = "https://riddles-api.vercel.app/random"

async function getRiddle()
{
    clearAnswer();
    console.log("it works");
    try //try fetch
    {
        const response = await fetch(endpoint);
        if(!response.ok) //Response was invalid or failed
        {
            throw Error(response.statusText);
        }
        const json = await response.json(); //Response is good
        console.log(json.riddle);
        //console.log(json.answer);
        displayRiddle(json.riddle);
        AnswerButton.addEventListener('click', function() {
            showAnswer(json.answer);
        });
    }
    catch (err)//from throw - if fails
    {
        console.log(err);
        alert('Failed to fetch new riddle');
    }
}

function displayRiddle(value)
{
    const riddleText = document.querySelector("#js-riddle-text");
    riddleText.textContent = value;
}

function showAnswer(quote)
{
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = quote;
}

function clearAnswer()
{
    const aText = document.querySelector("#js-answer-text");
    aText.textContent = "";
}

getRiddle();

function randomValue(array)
{
    const random = Math.floor(Math.random()*array.length);
    return array[random];
    //return random;
}

function changeSetting()
{
    //document.body.style.backgroundColor = 'Red';
    const Colour = randomValue(colors);
    document.body.style.backgroundColor = Colour;
    heading.textContent = titles[Colour];
}

