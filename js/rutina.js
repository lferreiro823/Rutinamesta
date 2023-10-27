// traigo el formulario, el boton y el resultado
let rutinaForm = document.getElementById("rutina");
let btn_crear = document.createElement("button");
let resultado = document.querySelector("#resultado");
//inicializo la variable tabla_dia para saber cuantos dias quiere entrenar
let tabla_dia = [];
//Creo los musculos, dividiendolos en empuje, tiron y pierna, a cada musculo le pongo su nombre y cuantas series semanales se recomiendan hacer segun el volumen deseado
let musculos = [
    [
        {
            "nombre": "pecho",
            0: 0,
            1: 8,
            2: 10,
            3: 12,
            4: 20,
            5: 22
        },
        {
            "nombre": "triceps",
            0: 0,
            1: 4,
            2: 6,
            3: 10,
            4: 14,
            5: 18
        },
        {
            "nombre": "hombro frontal",
            0: 0,
            1: 0,
            2: 0,
            3: 6,
            4: 8,
            5: 12
        },
        {
            "nombre": "hombro lateral",
            0: 0,
            1: 0,
            2: 8,
            3: 16,
            4: 22,
            5: 26
        },
        {
            "nombre": "hombro posterior",
            0: 0,
            1: 0,
            2: 8,
            3: 16,
            4: 22,
            5: 26
        }

    ],
    [
        {
            "nombre": "espalda",
            0: 0,
            1: 8,
            2: 10,
            3: 14,
            4: 22,
            5: 25
        },
        {
            "nombre": "biceps",
            0: 0,
            1: 5,
            2: 8,
            3: 14,
            4: 20,
            5: 26
        }
    ]
    ,
    [
        {
            "nombre": "cuadriceps",
            0: 0,
            1: 6,
            2: 8,
            3: 12,
            4: 18,
            5: 20
        },
        {
            "nombre": "femorales",
            0: 0,
            1: 4,
            2: 6,
            3: 10,
            4: 16,
            5: 20
        },
        {
            "nombre": "gluteo",
            0: 0,
            1: 0,
            2: 0,
            3: 4,
            4: 12,
            5: 16
        },
        ,
        {
            "nombre": "gemelos",
            0: 0,
            1: 6,
            2: 8,
            3: 12,
            4: 26,
            5: 20
        }
    ]
];
//Creo el formulario
crearForm();
/*La funcion crearForm crea los selects para que el usuario especifique cuantos dias a la semana quiere entrenar, y que volumen quiere en cada musculo
Primero se coloca el select para los dias, para eso se usa un for del 1 al 7 para cada opcion
Luego se colocan los select para los musculos
*/
function crearForm() {
    //select dias
    let label = document.createElement("label");
    let select = document.createElement("select");
    label.setAttribute("for", "dias");
    label.innerText = "Dias a entrenar";
    rutinaForm.appendChild(label);
    select.setAttribute("name", "dias");
    select.setAttribute("id", "dias");
    rutinaForm.appendChild(select);
    for (let index = 1; index <= 7; index++) {
        let option = document.createElement("option");
        option.setAttribute("value", index);
        option.innerText = index;
        select.appendChild(option);
    }
    //select musculos
    musculos.forEach(tipo => {
        tipo.forEach(element => {
            let label = document.createElement("label");
            let select = document.createElement("select");
            label.setAttribute("for", element.nombre);
            label.innerText = element.nombre;
            rutinaForm.appendChild(label);
            select.setAttribute("name", element.nombre);
            select.setAttribute("id", element.nombre);
            rutinaForm.appendChild(select);
            for (let index = 0; index <= 5; index++) {
                let option = document.createElement("option");
                option.setAttribute("value", element[index]);
                option.innerText = index;
                select.appendChild(option);
            }
        })

    });
    //Creo el boton
    btn_crear.innerText = "Crear Rutina";
    rutinaForm.appendChild(btn_crear);
}
//le agrego funcionalidad al boton de crear rutina
btn_crear.addEventListener("click", crearRutina);
/*Funcion para crear la rutina segun los datos seleccionados
Vacia el resultado
Se crea el encabezado
Luego se verifica si se quiere entrenar pierna o no 
*/
let btn_reintentar = document.getElementById("reintentar");
btn_reintentar.addEventListener("click", reintentar);
function reintentar(e){
    e.preventDefault();
    rutinaForm.classList.toggle("off");
    btn_reintentar.classList.toggle("off");
    resultado.innerHTML="";
}

function crearRutina(e) {
    e.preventDefault();
    rutinaForm.classList.toggle("off");
    btn_reintentar.classList.toggle("off");
    resultado.innerHTML = "";
    tabla_dia = [];
    let dias = document.getElementById("dias").value;
    //encabezado
    for (let i = 1; i <= dias; i++) {
        let table = document.createElement("table");
        tabla_dia.push(table);
        resultado.appendChild(table);
        let tr = document.createElement("tr");
        table.appendChild(tr);
        let th = document.createElement("th");
        th.innerText = "Dia " + i;
        tr.appendChild(th);
        tr = document.createElement("tr");
        table.appendChild(tr);
        th = document.createElement("th");
        th.innerText = "Musculo";
        tr.appendChild(th);
        th = document.createElement("th");
        th.innerText = "Series";
        tr.appendChild(th);
    }
    let piernas = false;
    musculos[2].forEach(element => {
        let valor = document.getElementById(element.nombre).value;
        if (valor > 0) {
            piernas = true;
        }
    })
    if (dias > 3) {
        if (dias == 4) {
            if (piernas) {
                for (let index = 0; index < 2; index++) {
                    musculos[index].forEach(element => {
                        let valor = document.getElementById(element.nombre).value;
                        res = Math.floor(valor / dias);
                        if (valor % dias == 1) {
                            agregarSerie(element.nombre, res, 0);
                            res++;
                            agregarSerie(element.nombre, res, 2);
    
                        }
                        else{
                            agregarSerie(element.nombre, res, 0);
                            agregarSerie(element.nombre, res, 2);
                        }
                    })
                }
                musculos[2].forEach(element => {
                    let valor = document.getElementById(element.nombre).value;
                    res = Math.floor(valor / dias);
                    if (valor % dias == 1) {
                        agregarSerie(element.nombre, res, 0);
                        res++;
                        agregarSerie(element.nombre, res, 2);

                    }
                    else{
                        agregarSerie(element.nombre, res, 0);
                        agregarSerie(element.nombre, res, 2);
                    }
                })
            } else {
                for (let index = 0; index < 2; index++) {
                    musculos[index].forEach(element => {
                        let valor = document.getElementById(element.nombre).value;
                        res = Math.floor(valor / dias);
                        if (valor % dias == 1) {
                            agregarSerie(element.nombre, res, index);
                            res++;
                            agregarSerie(element.nombre, res, index+2);
    
                        }
                        else{
                            agregarSerie(element.nombre, res, index);
                            agregarSerie(element.nombre, res, index+2);
                        }
                    })
                }
            }
        }
    } else {
        musculos.forEach(tipo => {
            tipo.forEach(element => {
                let valor = document.getElementById(element.nombre).value;
                res = Math.floor(valor / dias);
                if (valor % dias == 1) {
                    agregarSerie(element.nombre, res, 0);
                    res++;
                    for (let i = 2; i <= dias; i++) {
                        agregarSerie(element.nombre, res, i - 1);
                        res--
                    }
                }
                else if (valor % dias == 2) {
                    agregarSerie(element.nombre, res + 1, 0);
                    agregarSerie(element.nombre, res, 1, 1);
                    agregarSerie(element.nombre, res + 1, 2);
                }
                else {
                    for (let i = 1; i <= dias; i++) {
                        agregarSerie(element.nombre, valor / dias, i - 1);
                    }
                }
            })
        });
    }
}



function agregarSerie(musculo, serie, dia) {
    if (serie > 0) {
        let tr = document.createElement("tr");
        tabla_dia[dia].appendChild(tr);
        let td = document.createElement("td");
        td.innerText = musculo;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerText = serie;
        tr.appendChild(td);
    }
}