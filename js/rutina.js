let rutinaForm = document.getElementById("rutina");
let btn_crear = document.createElement("button");
let musculos = [
    {
        "nombre" : "pecho",
        0 : 0,
        1 : 8,
        2 : 10,
        3 : 12,
        4 : 20,
        5 : 22
    },
    {
        "nombre" : "espalda",
        0 : 0,
        1 : 8,
        2 : 10,
        3 : 14,
        4 : 22,
        5 : 25
    },
    {
        "nombre" : "biceps",
        0 : 0,
        1 : 5,
        2 : 8,
        3 : 14,
        4 : 20,
        5 : 26
    },
    {
        "nombre" : "abdominales",
        0 : 0,
        1 : 0,
        2 : 0,
        3 : 16,
        4 : 20,
        5 : 25
    },
    {
        "nombre" : "trapecio",
        0 : 0,
        1 : 0,
        2 : 0,
        3 : 12,
        4 : 20,
        5 : 26
    },
    {
        "nombre" : "triceps",
        0 : 0,
        1 : 4,
        2 : 6,
        3 : 10,
        4 : 14,
        5 : 18
    },
    {
        "nombre" : "cuadriceps",
        0 : 0,
        1 : 6,
        2 : 8,
        3 : 12,
        4 : 18,
        5 : 20
    },
    {
        "nombre" : "femorales",
        0 : 0,
        1 : 4,
        2 : 6,
        3 : 10,
        4 : 16,
        5 : 20
    },
    {
        "nombre" : "gluteo",
        0 : 0,
        1 : 0,
        2 : 0,
        3 : 4,
        4 : 12,
        5 : 16
    },
    {
        "nombre" : "deltoide anterior",
        0 : 0,
        1 : 0,
        2 : 0,
        3 : 6,
        4 : 8,
        5 : 12
    },
    {
        "nombre" : "deltoide lateral",
        0 : 0,
        1 : 0,
        2 : 8,
        3 : 16,
        4 : 22,
        5 : 26
    },
    {
        "nombre" : "deltoide trasero",
        0 : 0,
        1 : 0,
        2 : 8,
        3 : 16,
        4 : 22,
        5 : 26
    },
    {
        "nombre" : "gemelos",
        0 : 0,
        1 : 6,
        2 : 8,
        3 : 12,
        4 : 26,
        5 : 20
    },
    {
        "nombre" : "soleo",
        0 : 0,
        1 : 6,
        2 : 8,
        3 : 12,
        4 : 26,
        5 : 20
    },
    {
        "nombre" : "antebrazo",
        0 : 0,
        1 : 0,
        2 : 0,
        3 : 8,
        4 : 12,
        5 : 16
    },];
crearForm();
function crearForm() {
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
    musculos.forEach(element => {
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
    });
    btn_crear.innerText = "Crear Rutina";
    rutinaForm.appendChild(btn_crear);
}
btn_crear.addEventListener("click",crearRutina);
function crearRutina(e){
    e.preventDefault();
    musculos.forEach(element => {
        
    });
}