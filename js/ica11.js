const QuoteButton = document.querySelector('#js-new-quote');
QuoteButton.addEventListener('click', getQuote);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"

async function getQuote()
{
    console.log("it works");
    try //try fetch
    {
        const response = await fetch(endpoint);
        if(!response.ok) //Response was invalid or failed
        {
            throw Error(response.statusText);
        }
        const json = await response.json(); //Response is good
        //console.log(json.question);
        //console.log(json.answer);
        displayQuote(json.question);
        showAnswer(json.answer);
    }
    catch (err)//from throw - if fails
    {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote)
{
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function showAnswer(quote)
{
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = quote;
}

getQuote();


