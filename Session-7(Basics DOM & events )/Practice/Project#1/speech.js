window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
let finalTranscript = '';
let recognition = new window.SpeechRecognition();

recognition.interimResults = true;
recognition.maxAlternatives = 10;
recognition.continuous = true;

recognition.onresult = event => {
  let interimTranscript = '';
  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
    let transcript = event.results[i][0].transcript;
    finalTranscript = '';
    if (event.results[i].isFinal) {
      finalTranscript += transcript;
    } else {
      interimTranscript += transcript;
    }
  }

  document.querySelector('.speech').innerHTML =
    finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
};
recognition.start();
