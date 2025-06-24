class Animales{
    constructor(nombre,peso,edad){
        this.nombre=nombre;
        this.peso=peso;
        this.edad=edad;
    }
    MostrarInfo(){
        return `Nombre: ${this.nombre} - Peso: ${this.peso} - Edad: ${this.edad} años`;
    }
}
class Perro extends Animales{
    constructor(nombre,peso,edad,raza){
        super(nombre,peso,edad);
        this.raza=raza;
    }
    MostrarInfo(){
        return `Nombre: ${this.nombre} - Peso: ${this.peso} kg - Edad: ${this.edad} años - Raza: ${this.raza}`;
    }
}
class Gato extends Animales{
    constructor(nombre,peso,edad,sexo){
        super(nombre,peso,edad);
        this.sexo=sexo;
    }
    MostrarInfo(){
        return `Nombre: ${this.nombre} - Peso: ${this.peso} kg - Edad: ${this.edad} años - Sexo: ${this.sexo}`;
    }
}
class Conejo extends Animales{
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this.color=color;
    }
    MostrarInfo(){
        return `Nombre: ${this.nombre} - Peso: ${this.peso} kg - Edad: ${this.edad} años - Color: ${this.color}`;
    }
}

let perro1=new Perro("Mike","56","3","Pastor Aleman");
let perro2=new Perro("Coffie","15","2","Shih Tzu");
let perro3=new Perro("Flecha","25","7","Rotwiler");
let perros=[perro1,perro2,perro3];2
let gato1=new Gato("Avocato","7","1","Macho");
let gato2=new Gato("Rengar","6","5","Macho");
let gato3=new Gato("Avena","4","4","Hembra");
let gatos=[gato1,gato2,gato3];
let conejo1=new Conejo("Bocs Bonny","3","9","Cafe");
let conejo2=new Conejo("Copito","3","6","Blanco");
let conejo3=new Conejo("Chocolate","5","1","Cafe y Blanco");
let conejos=[conejo1,conejo2,conejo3];

function MostrarPerros(){
    let lista = document.getElementById("ListaAnimales");
    lista.innerText = "";
    for(perrete of perros){
        let item = document.createElement('li');
        item.innerText = perrete.MostrarInfo();
        lista.appendChild(item);
    }
}
function MostrarGatos(){
    let lista = document.getElementById("ListaAnimales");
    lista.innerText = "";
    for(gatete of gatos){
        let item = document.createElement('li');
        item.innerText = gatete.MostrarInfo();
        lista.appendChild(item);
    }
}
function MostrarConejos(){
    let lista = document.getElementById("ListaAnimales");
    lista.innerText = "";
    for(conejete of conejos){
        let item = document.createElement('li');
        item.innerText = conejete.MostrarInfo();
        lista.appendChild(item);
    }
}