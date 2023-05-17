//Menu 
function menu() {
    _toggle.onclick = () => {
        _items.classList.toggle("open")
        _toggle.classList.toggle("close")
    }

}
function moverseA(id) {
    location.href = "#" + id;
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")




}
//menu fin

var i = 0
var x = 0
var j = 0
var parrafo1 = 'Soy Desarrollador, tengo 27 años, me gusta la música, programar y en mi pasatiempo me gusta tocar los instrumentos de música, aprender más como desarrollador, pasar tiempo con mi familia.  '
var parrafo2 = 'Empecé a programar en C++ en la escuela Técnica N°2 y de ahí nació mi pasión por todo lo relacionado  con la programación. La facilidad de aprender  y adaptarme al entorno me ayuda mucho a crecer como  profesional en sistemas. Actualmente me encuentro estudiando la carrera de Licenciatura en Sistemas correlativa con Técnicatura Superior en Informática y en cursos extras capacitando el conocimiento en las nuevas tecnoligías.'
var parrafo3 = 'En otro apartado podra ver los lenguajes de programación que eh aprendido y que tengo conocimiento hasta ahora. Más abajo podrá encontrar mis trabajos realizados, mis habilidades y un formulario para contactarme. No dudes en contactarme ! Te espero ! '
var speed = 50


//Escritura
function typeWriter() {
    if (i < parrafo1.length) {
        document.getElementById('parrafo1').innerHTML += parrafo1.charAt(i)
        i++
        setTimeout(typeWriter, speed)
    }
    if (i == parrafo1.length) {
        if (x < parrafo2.length) {
            document.getElementById('parrafo2').innerHTML += parrafo2.charAt(x)
            x++
            setTimeout(typeWriter, speed)
        }
        if (x == parrafo2.length) {
            if (j < parrafo3.length) {
                document.getElementById('parrafo3').innerHTML += parrafo3.charAt(j)
                j++
                setTimeout(typeWriter, speed)
            }
        }
    }
}
