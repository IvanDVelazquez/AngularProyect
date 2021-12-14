interface Pasajero{
    nombre: string;
    hijos?: string[];

}

const pasajero1: Pasajero = {
    nombre: 'Ivan'
}

const pasajero2: Pasajero = {
    nombre: 'Persona 2',
    hijos: ['Natalia','Gabriel']
}

function imprimeHijos(pasajero:Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);

}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);