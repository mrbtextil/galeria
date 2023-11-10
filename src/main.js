const lista = ['a','b','ce',"false","true",2]
const list2a = [false,55,2,true]

function contar(){
    tamañop = lista.length;
    console.log(tamañop);
}

function mostrar(){
    muestra = lista.join(" $#####$  </br>");
    document.body.innerHTML = muestra;
}

function ordena(){
    orde = lista.sort();
    console.log(lista)
}

function reversa(){
    reve= lista.reverse();
    console.log(lista)
}

function unir(){
    une = lista.concat(list2a);
    console.log(une)
}

function mas(){
    const mas2 = prompt("ñade elemento:   ")
    lista.push(mas2)
    console.log(lista)
}


function elimina(){
    une = lista.pop();
    console.log(lista)
}

function eliminaPrimero(){
    une = lista.shift();
    console.log(lista)
}

function añadePrimero(){
    const mas2 = prompt("ñade elemento:   ")
    une = lista.unshift(mas2);
    console.log(lista)
}

function splice1(){
    const rem = prompt("remplasar:   ")
    remplasa = lista.splice(0, rem)
    console.log(lista)
}


function separar(){
    const rem = lista.slice(0,3)
    console.log(rem);
}

function busca(){
    const item = prompt("buscar");
    const busc = lista.indexOf(item);
    if(busc == -1){
        console.log("no existe")
    }else{
        console.log(`el item tiene index ${busc}`);
    }
}

function buscaUltimo(){
    const item = prompt("buscar");
    const busc = lista.lastIndexOf(item);
    if(busc == -1){
        console.log("no existe")
    }else{
        console.log(`el item tiene index ${busc}`);
    }
}

function para(){
    const par = lista.forEach((item, index) => {
        console.log(`${item} item con numero ${index}`)
    })
}


function fin(){
    const pr = prompt("letra");
    const fi = lista.find((pre) => {
        if(pre[0] !== pr){
            return "no existe"
        }else{
            return pre
        }
    })
    console.log(fi)
}

function mapa(){
    const maps = lista.map((item) => {
        return item + " ;)"
    })
    console.log(maps)
}

function filtro(){
    const fil = lista.filter((item) => {
        if(item.length === 2){
            return item + " tiene dos letras"
        }
    });
    console.log(fil)
}

function todos(){
    const todo = lista.every((item) => {
        if(typeof item === 'string'){
            return true 
        }else{
            return false 
        }
    });
    console.log(todo)
}

function algunos(){
    const todo = lista.some((item) => {
        if(typeof item !== 'string'){
            return true 
        }else{
            return false 
        }
    });
    console.log(todo)
}

const cliente = {
    nombre: 'uno',
    email: 'algoQ.com',
    telefone: 3215462125,
    compras: [1,2,3,4,5,],
    saludo: () => {
        console.log("hola")
    }
}

const claves = Object.keys(cliente);
const valores = Object.values(cliente);
const elementos = Object.entries(cliente);

console.log(claves)
console.log(valores)
console.log(elementos.length)

function suma(){
    const uno = parseFloat(prompt("primer numero: "))
    const dos = parseFloat(prompt("segundo numero: "))
    console.log(uno + dos);
}
const ram = Math.random()
console.log(Math.floor(ram * 100))
console.log(Math.ceil(ram * 100))

const lista3 = [1,2,3,4]
const lista4 = [11,22,33,44,...lista3]
console.log(lista3);
console.log(lista4);

const persona = {
    ...cliente,
    ciudad: 'a',
    ocupacion: 'b'
}
console.log(persona);

const datosP = (a,b,...otros) =>{
    console.log(a,b,otros)
}

datosP('ppp','dsd',1,22,33,'pppp');

const [a,b,c,d,e] = lista4;
console.log(a)
console.log(e)

const datosE = ({ciudad,ocupacion}) =>{
    console.log(`ciudad ${ciudad} y se dedica a ${ocupacion}`)
}
datosE(persona);

for (let i = 0 ; i < lista4.length ; i++){
    console.log(lista4[i])
}

class User {
    type = 'cliente';
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    datosC(){
        return `the name is ${this.name} and her name is ${this.email}`
    }
}

const user1 = new User('pepa','pepa@gmail.com');
console.log(user1);
console.log(user1.datosC());

const user2 = new User('dede','dede@gmail.com');
console.log(user2.datosC());

class Master extends User {
    constructor(name,email,permisos){
        super(name,email)
        this.permisos = permisos
    }
    static borrar(dato){
        console.log(`puedes borrar los ${dato}`);
    }
}

Master.borrar('datojjjjjs');
console.log('-------promesa-----------');

const promesa1 = () => {
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        const pedido = true;
        if(pedido){
            resolve("pedido realizado")
        }else{
            reject("pedido NO realizado")
        }
    }, 3000)
    });
}

// promesa1.then((mensaje) =>{
//     console.log(mensaje);
// });

// promesa1.catch((mensaje) =>{
//     console.log(mensaje);
// });
console.log("comienza pedido")
const prueba = async () =>{
    try{
        const pru = await promesa1();
        console.log(pru);
    }catch(error){
        console.log(error)
    }
    console.log("finaliza pedido")
}

prueba();


console.log("-------location--------")
console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);
console.log(window.innerHeight);
console.log(window.innerWidth);

console.log("-------navigator--------")
console.log(navigator.geolocation);
console.log(navigator.cookieEnabled);
console.log(navigator.userAgent);

function sesion(){
    let nombre = prompt("ingrese nombre: ")
    document.cookie = `nombre=${nombre}`;
    alert("sesion iniciada")
}

function cerrarSesion(){
    document.cookie = 'nombre="";expires=1 jan 2022 01:00:00';
    alert("sesion cerrada")
};

const caja1 = document.querySelector("#contenedor1 .caja");
console.log(caja1);

function color(){
    caja1.innerHTML = 'cambio'
    caja1.style.background = '#000'
    caja1.style.color = '#fff'    
}

const agregarCaja = () =>{
    const nuevaCaja = document.createElement('div');
    nuevaCaja.innerHTML = 'nueva caja';
    nuevaCaja.setAttribute('class','caja');
    const contenedor = document.getElementById('contenedor1');
    contenedor.appendChild(nuevaCaja);
}

const eliminar = () =>{
    const contenedor = document.getElementById('contenedor1');
    const obj = contenedor.querySelector('.caja');
    if(obj){
        contenedor.removeChild(obj);
    }
}




