//Isabela Zamith @isabelazamith, 2021
//p5.js
//Special thanks to the Coding Train p5.js tutorials on youtube! :)

var song;
var ampmusic;
var ampmic;
var button;
let mic;
var vol;
var song1;
var song2;
var song3;
var s;
let arraymusicas
var volhistory = [];

//atribui a música na pasta assets à uma variável
function preload() {
  song = loadSound('assets/musica.mp3');
}

//setup do p5.js, começa a tocar a música
//tem algumas variáveis para input de microfone (mic, audioIn) que eu ia implementar mas 
//decidi priorizar as músicas, vou retirar isso depois 
function setup() {
  song.play(0.1);
  mic = new p5.AudioIn();
  var width = windowWidth;
  var height = windowHeight;
  let canvas = createCanvas(width, height-50);
  canvas.parent('canvas');   
  ampmusic = new p5.Amplitude();
  ampmic = new p5.AudioIn();
  console.log('Setup Complete')
}

//draw do p5.js 
function draw() {
      background(252,247,248);

      //getLevel da música que tá tocando
      vol = ampmusic.getLevel();
      //guarda no array de amplitudes
      volhistory.push(vol);
      stroke(0,67,70);
      noFill();

      var currentY = map(vol, 0, 1, height, 0);
      //console.log(vol)
      translate(0, height / 2 - currentY);
      push();
      beginShape();
      for (var i = 0; i < volhistory.length; i++) {
        var y = map(volhistory[i], 0, 1, height-50, 0);  
          vertex(i, y);
      }   
      endShape();
      pop();
      if (volhistory.length > width -30) {
        volhistory.splice(0, 1);
      }
}