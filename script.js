const messages = document.getElementById('messages')
const input = document.getElementById('input')
const send = document.getElementById('send')
const chat_container = document.getElementById('chatbot')

function sendMessage(){
    const text = input.value.trim() //remove extra spaces
    if(text.length === 0){return}
    const message = document.createElement('div')
    message.classList.add('message', 'user')
    message.textContent = text
    messages.appendChild(message)
    fetch('chatbot.php')
    .then(response => response.json())
    .then(data => {
        const answer = findAnswer(data, text)
        displayAnswer(answer)
    })
    .catch(error => console.log(error))
    input.value = ''
}

function findAnswer(data, text){
    for(let i =0; i < data.length; i++){
        const question = data[i].question.toLowerCase();
        if(text.toLowerCase().includes(question)){
            return data[i].answer
        }
    }
    return "Sorry I didn't Understand ! Please Try Again"
}

function displayAnswer(answer){
    const message = document.createElement('div')
    message.classList.add('message', 'bot')
    message.textContent = answer
    messages.appendChild(message)
    const utterance = new SpeechSynthesisUtterance(answer)
    utterance.voice = speechSynthesis.getVoices()[1]
    speechSynthesis.speak(utterance)
    chat_container.scrollTop = chat_container.scrollHeight
}


send.addEventListener('click',sendMessage);
input.addEventListener('keydown', event =>{
    if(event.key == 'Enter'){
        sendMessage()
    }
})
