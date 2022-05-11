class Perritos{
    constructor(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
      this.patas = 4;
    }
  
    correr(){
      console.log("estoy corriendo");
    }
  
    ladrar(){
      console.log(this.nombre + " esta ladrando");
    }
  }
  
  const perrito1 = new Perritos("sparki", 3);
  const perrito2 = new Perritos("benedetto", 4);
  
  console.log(perrito1.nombre);
  perrito1.correr();
  perrito1.ladrar();
