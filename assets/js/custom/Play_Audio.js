function playAudio(filePath) {
  // Create a new Audio object with the provided file path
  var prefix = '/spanish/assets/sources/audios/';
  var real_path = prefix + filePath;
  var audio = new Audio(real_path);
  console.log(audio);

  // Play the audio
  audio.play();
}
