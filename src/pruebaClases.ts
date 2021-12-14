class Persona {
    public nombre: string;
    public apellido: string ;
    public edad: Number;
    public sexo: string;

    constructor(nombre:string, apellido:string, edad: Number, sexo: string) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.sexo=sexo;
    }

    mostrarDatos(){
        console.log('Datos de la persona Nombre: '+this.nombre+' Apellido: ' +this.apellido+ ' Edad: '+this.edad+ ' Sexo: '+this.sexo);
    }
}