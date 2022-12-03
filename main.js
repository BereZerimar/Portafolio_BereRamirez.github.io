// let app = document.getElementById('typewriter');

// let typewriter = new Typewriter(app, {
//     loop:true,
//     delay:75,
// });

// typewriter
// .pausefor(2500)
// .typeString('Estudio 5to semestre de preparatoria y estoy aprendiendo sobre programación')
// .pausefor(200)
// .deleteChars(10)
// .start()

let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop:true,
  delay:75,
});
 
typewriter
.pauseFor(2500)
.typeString('Estudio 5to semestre de preparatoria y estoy aprendiendo sobre programación')
.pauseFor(200)
.deleteChars(10)
.start()
