const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

SpeechRecognition.continunous = true;
const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang='en-US';


let final_transcript= "";

final_transcript=""
recognition.onresult= function(e){
let interim_transcript = "";
for(let i = e.resultIndex; i< e.results.length; ++i){
    if(e.results[i].isFinal)final_transcript += e.results[i][0].transcript;
    else(interim_transcript) += e.results[i][0].transcript;
}
document.querySelector('#final').innerHTML = final_transcript;
document.querySelector('#interim').innerHTML = interim_transcript;

}

recognition.onend = () => {
    
}
export function speechToText() {
    recognition.start();
    console.log('speechToText => START...')
}

export function stopSpeechToText(){
    recognition.stop()
    final_transcript=""
    console.log('speechToText => End...')
}
