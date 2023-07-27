let rutinaForm = document.getElementById("rutina");
let btn_crear = document.createElement("button");
let resultado = document.querySelector("#resultado");
let tabla_dia =[];
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
    resultado.innerHTML = "";
    tabla_dia = [];
    let dias = document.getElementById("dias").value;
    for(let i = 1; i <=dias; i++){
        let table = document.createElement("table");
        tabla_dia.push(table);
        resultado.appendChild(table);
        let tr  = document.createElement("tr");
        table.appendChild(tr);
        let th  = document.createElement("th");
        th.innerText = "Día " + i;
        tr.appendChild(th);
        tr  = document.createElement("tr");
        table.appendChild(tr);
        th  = document.createElement("th");
        th.innerText = "Musculo";
        tr.appendChild(th);
        th  = document.createElement("th");
        th.innerText = "Series";
        tr.appendChild(th);
    }
    
    if(dias>3){
        let piernas = false;
        musculos.forEach(element => {
            let valor = document.getElementById(element.nombre).value;
            if(element.name == "cuadriceps" || element.name == "cuadriceps"
            || element.name == "gemelos" || element.name == "soleo" || element.name == "gluteo"){
                if(valor>0){
                    piernas = true;
                }
            }
            if(valor%2==1){
                if(piernas){

                }else{

                }
            }
            else{
                if(piernas){
                    
                }else{

                }
                for(let i = 1; i <= dias; i++){
                    agregarSerie(element.nombre,valor/dias,i-1);
                }
            }
    
        });
    }else{
        musculos.forEach(element => {
            let valor = document.getElementById(element.nombre).value;
            res = Math.floor(valor/dias);
            if(valor%dias==1){
                agregarSerie(element.nombre,res,0);
                res++;
                for(let i = 2; i <= dias; i++){
                    agregarSerie(element.nombre,res,i-1);
                    res--
                }
            }
            else if(valor%dias==2){
                agregarSerie(element.nombre,res+1,0);
                agregarSerie(element.nombre,res,1,1);
                agregarSerie(element.nombre,res+1,2);
            }
            else{
                for(let i = 1; i <= dias; i++){
                    agregarSerie(element.nombre,valor/dias,i-1);
                }
            }
        });
    }
    
    
}
function agregarSerie(musculo, serie, dia){
    if(serie > 0){
        let tr  = document.createElement("tr");
        tabla_dia[dia].appendChild(tr);
        let td  = document.createElement("td");
        td.innerText = musculo;
        tr.appendChild(td);
        td  = document.createElement("td");
        td.innerText = serie;
        tr.appendChild(td);
    }
}