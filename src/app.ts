import { Inventario } from "./patters/singleton.patter";
import { Tienda} from "./patters/factory-method.patter";
import { AdministradorDeSalarios} from "./patters/observer.patter";

//Patron Singletón
const inventario = Inventario.obtenerInstancia();

inventario.agregarEquipo("iPhone 14", "Smartphone", "disponible");
console.log("Patron Singletón-------------------------");
console.log(inventario.mostrarEquipos());

// //Patron Factory Method
console.log("Patron Factory-------------------------");
const tienda = new Tienda();
tienda.crearProducto('digital', 'Software XYZ');
tienda.mostrarProductos();

// //Metodo Observer
const adminSalarios = new AdministradorDeSalarios();
adminSalarios.agregarObservador("Axel")
adminSalarios.agregarObservador("Bresanovich");

adminSalarios.cambiarSalario(60000);

// console.log("Patron Adaptador-------------------------");
