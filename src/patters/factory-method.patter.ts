interface Producto {
  calcularPrecio(): number;
  getInfo(): { nombre: string; tipo: string; estado: string }; // Método para obtener información del producto
}

class ProductoFisico implements Producto {
  private costo: number;

  constructor(private nombre: string) {
    this.costo = 100; // Precio base para este ejemplo
  }

  calcularPrecio(): number {
    return this.costo + 10; // Costo más una tarifa de envío fija
  }

  getInfo() {
    return { nombre: this.nombre, tipo: 'Producto Físico', estado: 'disponible' };
  }
}

class ProductoDigital implements Producto {
  private costo: number;

  constructor(private nombre: string) {
    this.costo = 50; // Precio base para este ejemplo
  }

  calcularPrecio(): number {
    return this.costo; // No tiene costo de envío
  }

  getInfo() {
    return { nombre: this.nombre, tipo: 'Producto Digital', estado: 'disponible' };
  }
}

export class Tienda {
  private productos: Producto[] = []; // Array para almacenar productos

  public crearProducto(tipo: string, nombre: string): Producto {
    let producto: Producto;

    if (tipo === 'fisico') {
      producto = new ProductoFisico(nombre);
    } else if (tipo === 'digital') {
      producto = new ProductoDigital(nombre);
    } else {
      throw new Error('Tipo de producto no reconocido');
    }

    this.productos.push(producto); // Añadir el producto al array
    return producto; // Devolver el producto creado
  }

  public mostrarProductos(): void {
    const infoProductos = this.productos.map(producto => producto.getInfo());
    console.log(infoProductos);
  }
}
