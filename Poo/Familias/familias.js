class Persona {
    constructor(nombre) {
      this.nombre = nombre;
    }
}
class Tarea {
    constructor(nombre) {
      this.nombre = nombre;
    }
}
  
  class familia_Sastre {
    constructor() {
      this.personas = [
        new Persona("Padre Sastre"),
        new Persona("Madre Sastre"),
        new Persona("Hijo Sastre"),
        new Persona("Hija Sastre"),
    ];
      this.tareas = [
        new Tarea("Poner lavadora"),
        new Tarea("Limpiar cocina"),
        new Tarea("Limpiar baño"),
      ];
    }
}

    class familia_Torrens {
        constructor() {
            this.personas = [
                new Persona("Padre Torrens"),
                new Persona("Madre Torrens"),
                new Persona("Hijo Torrens"),
                new Persona("Hija Torrens"),
            ];
            this.tareas = [
                new Tarea("Planchar"),
                new Tarea("Limpiar baño")
            ];
        }
    }

    class familia_Moll {
        constructor() {
            this.personas = [
                new Persona("Padre Moll"),
                new Persona("Madre Moll"),
                new Persona("Hijo Moll"),
                new Persona("Hija grande Moll"),
                new Persona("Hija pequeña Moll")
            ];

            this.tareas = [
                new Tarea("Poner lavadora"),
                new Tarea("Limpiar cocina"),
                new Tarea("Limpiar comedor"),
                new Tarea("Planchar"),
                new Tarea("Limpiar baño")
            ];
        }
    }
  
    const familiaMoll = new familia_Moll;
    const familiaSastre = new familia_Sastre;
    const familiaTorrens = new familia_Torrens;

    var tareasIndex = 0;
    function asignarTareas(familia, semanas) {
      for (let i = 1; i < semanas+1; i++) {
        console.log("Semana: " + i);
        for (let j = 0; j < familia.tareas.length; j++) {
          var modulo = tareasIndex % familia.personas.length;
          console.log(familia.personas[modulo].nombre + " le toca " + familia.tareas[j].nombre);
          tareasIndex++;
        }
      }
    }
    
    
    
    console.log("Planificación Familia MOLL")
    asignarTareas(familiaMoll, 12);
    console.log("Planificación Familia SASTRE")
    asignarTareas(familiaSastre,52)
    console.log("Planificación Familia TORRENS")
    asignarTareas(familiaTorrens,4)

    