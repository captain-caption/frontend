
export function speechToText() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    SpeechRecognition.continunous = true;
    const recognition = new SpeechRecognition();

    recognition.continunous = true;
    recognition.interimResult = true;
    recognition.lang = 'en-US';

    let text = ""


    recognition.start();
    console.log('START@@!')

    recognition.onresult = function (e) {
        text = e.results[0][0].transcript
    }


    recognition.onend = () => {
        console.log('End...')
    }
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(text)
        }, 5000)
    });

}
