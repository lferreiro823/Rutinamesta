let rutinaForm = document.getElementById("rutina");
let btn_crear = document.createElement("button");
let musculos = [
    {
        "nombre" : "pecho",
        1 : 8,
        2 : 10,
        3 : 12,
        4 : 20,
        5 : 22
    },
    {
        "nombre" : "espalda",
        1 : 8,
        2 : 10,
        3 : 14,
        4 : 22,
        5 : 2
    },
    {
        "nombre" : "biceps",
        1 : 5,
        2 : 8,
        3 : 14,
        4 : 20,
        5 : 26
    },
    "abdominales",
    "dorsales",
    "trapecios",
    "triceps",
    "cuadriceps",
    "femorales",
    "abductores",
    "aductores",
    "gemelos",
    "soleo",
    "antebrazo"];
let pecho = {
    "nombre" : pecho,
    1 : 8,
    2 : 10,
    3 : 12,
    4 : 20,
    5 : 22
}
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
        label.setAttribute("for", element);
        label.innerText = element;
        rutinaForm.appendChild(label);
        select.setAttribute("name", element);
        select.setAttribute("id", element);
        rutinaForm.appendChild(select);
        for (let index = 0; index <= 5; index++) {
            let option = document.createElement("option");
            option.setAttribute("value", index);
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