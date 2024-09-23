import { Inventario } from "./patters/singleton.patter";

//Patron Singletón
const inventario = Inventario.obtenerInstancia();

inventario.agregarEquipo("iPhone 14", "Smartphone", "disponible");
console.log("Patron Singletón-------------------------");
console.log(inventario.mostrarEquipos());

// //Patron Factory Method


// //Metodo Observer


// console.log("Patron Adaptador-------------------------");
