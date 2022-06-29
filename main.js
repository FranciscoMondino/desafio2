let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("nombre del alumno" + (i+1))]
} 


alert (alumnosTotales)
