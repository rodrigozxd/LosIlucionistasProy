conn = new Mongo();
db = conn.getDB("Juegos1");

db.mapas.insert([
  {
  _id: 1,
  nombre: "bosque",
  clima: "invierno",
  dificultad: [
  		{
  			velocidad: 2,
  			forma: "desperdigado",
  			especialidad: null
  		}
  	]
  },
  {
  _id: 2,
  nombre: "decierto",
  clima: ["atardecer", "verano"],
  dificultad: [
  		{
  			velocidad: 6,
  			forma: "acuñado",
  			especialidad: "quemar"
  		}
  	]
  },
  {
  _id: 3,
  nombre: "montañas",
  clima: ["noche", "otoño"],
  dificultad: [
  		{
  			velocidad: 4,
  			forma: "perdido",
  			especialidad: null
  		}
  	]
  }
]);

db.villanos.insert([
  {_id: 1, nombre: "Dallas", clase: "futurista", estilo: "robot", ataque: [ {tipo_ataque: ["lacer","bombas dirigidas"], daño_ataque: 2} ], vida: 64, defensa: 15, velocidad: 5},
  {_id: 2, nombre: "Amon", clase: "Egipcio", estilo: "semi-dios", ataque: [ {tipo_ataque: ["veneno","meteoros"], daño_ataque: 2.5} ], vida: 80, defensa: 20, velocidad: 8},
  {_id: 3, nombre: "Trump", clase: "Presidente", estilo: "empresario", ataque: [ {tipo_ataque: ["muros","bombasForma$"], daño_ataque: 1.8} ], vida: 50, defensa: 40, velocidad: 10}
]);

db.usuarios.insert([
  {_id: 1,
    nombre : "Lyahn" ,
    Nusuario:"anonymus" ,
    contraceña:"anonymus1" ,
    correo : "lhyan.robles@tecsup.edu.pe" ,
    carros : [
      {
        nombre : "devastador",
        vidas : 4,
        defensa : 3,
        ataque : 1,
        velocidad : 3,
        precio : 0,
        habilidad : "",
        diseño : "moderno",
        color : "rosado"
      },
      {
        nombre : "asesino",
        vidas : 4,
        defensa : 3,
        ataque : 1,
        velocidad : 3,
        precio : 0,
        habilidad : "",
        diseño : "clasico",
        color : "negro_rojo"
      },
      {
        nombre : "rebelde" ,
        vidas : 4 ,
        defensa : 3 ,
        ataque : 1,
        velocidad : 3 ,
        precio : 0 ,
        habilidad : "" ,
        diseño : "terreno" ,
        color : "azul_naranja"
      }

    ] ,
    monedas:500 ,
    ScoreMax: 0
  },
  {_id: 2,
    nombre : "Rodrigo" ,
    Nusuario:"ciclon" ,
    contraceña:"ciclon2" ,
    correo : "rodrigo.paredes@tecsup.edu.pe" ,
    carros : [
      {
        nombre : "devastador",
        vidas : 4,
        defensa : 3,
        ataque : 1,
        velocidad : 3,
        precio : 0,
        habilidad : "",
        diseño : "moderno",
        color : "rosado"
      },
      {
        nombre : "asesino",
        vidas : 4,
        defensa : 3,
        ataque : 1,
        velocidad : 3,
        precio : 0,
        habilidad : "",
        diseño : "clasico",
        color : "negro_rojo"
      },
      {
        nombre : "rebelde" ,
        vidas : 4 ,
        defensa : 3 ,
        ataque : 1,
        velocidad : 3 ,
        precio : 0 ,
        habilidad : "" ,
        diseño : "terreno" ,
        color : "azul_naranja"
      }
    ] ,
    monedas:500 ,
    ScoreMax: 0
  },
  {_id: 3,
    nombre : "Albert" ,
    Nusuario:"dash" ,
    contraceña:"dash3" ,
    correo : "albert.huarcaya@tecsup.edu.pe" ,
    carros : [
      {
        nombre : "devastador",
        vidas : 4,
        defensa : 3,
        ataque : 1,
        velocidad : 3,
        precio : 0,
        habilidad : "",
        diseño : "moderno",
        color : "rosado"
      },
      {
        nombre : "asesino",
        vidas : 4,
        defensa : 3,
        ataque : 1,
        velocidad : 3,
        precio : 0,
        habilidad : "",
        diseño : "clasico",
        color : "negro_rojo"
      },
      {
        nombre : "rebelde" ,
        vidas : 4 ,
        defensa : 3 ,
        ataque : 1,
        velocidad : 3 ,
        precio : 0 ,
        habilidad : "" ,
        diseño : "terreno" ,
        color : "azul_naranja"
      }
    ] ,
    monedas:500 ,
    ScoreMax: 0
  }
]);

db.items.insert([
  {_id: 1, nombre:"bomba" , tipo:"drop" , habilidad:"+bombas" , descripcion: "dala capacidad de plantar mas bombas en el campo de juego"},
  {_id: 2, nombre:"flecha" , tipo:"lanza" , habilidad:"+flechas" , descripcion: "da la capadidad de lanzar flechas en el campo de juego"},
  {_id: 3, nombre:"escudo" , tipo:"protege" , habilidad:"+escudos" , descripcion: "da la capacidad de añadir proteccion adicional en el campo de juego"}

]);
