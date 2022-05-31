
export function speechToText() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    SpeechRecognition.continunous = true;
    const recognition = new SpeechRecognition();

    recognition.continunous = true;
    recognition.interimResult = true;
    recognition.lang='en-US';

    let text = ""

    const start = document.querySelector('#start')
    start.addEventListener('click', ()=>{
        recognition.start();
        console.log('START@@!')

        recognition.onresult=function(e){
            text = e.results[0][0].transcript
            var show = document.getElementById('show'); 
            show.innerHTML = text;
            console.log(e)
        }
    })

    recognition.onend=()=>{
        console.log('End...')
    }
    return text;
    
}
