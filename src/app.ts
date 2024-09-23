import { Inventario } from "./patters/singleton.patter";
import {EquipoFactory} from "./patters/factory-method.patter";
import { Soporte, Equipo} from "./patters/observer.patter";
import { InventarioViejo, AdaptadorInventario} from "./patters/adaptador.patter";

//Patron Singletón
const inventario = Inventario.obtenerInstancia();

inventario.agregarEquipo("iPhone 14", "Smartphone", "disponible");
console.log("Patron Singletón-------------------------");
console.log(inventario.listarEquipos());

// //Patron Factory Method
console.log("Patron Factory-------------------------");
const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Servidor", "Dell XPS", "16GB", "i7");
console.log(Notebook.getInfo());

// //Patron Observer
console.log("Patron observer-------------------------");

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.

// Patrón Adaptador
console.log("Patron adaptador-------------------------");
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());

