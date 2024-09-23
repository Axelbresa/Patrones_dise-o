interface Observador {
  actualizar(salario: number): void;
}

class Empleado implements Observador {
  constructor(private nombre: string) {}

  actualizar(salario: number): void {
      console.log(`${this.nombre} ha sido notificado. Nuevo salario: ${salario}`);
  }
}

export class AdministradorDeSalarios {
  private observadores: Observador[] = [];
  private salario: number = 0;

  agregarObservador(observador: Observador): void {
      this.observadores.push(observador);
  }

  eliminarObservador(observador: Observador): void {
      this.observadores = this.observadores.filter(obs => obs !== observador);
  }

  cambiarSalario(nuevoSalario: number): void {
      this.salario = nuevoSalario;
      this.notificarObservadores();
  }

  private notificarObservadores(): void {
      this.observadores.forEach(obs => obs.actualizar(this.salario));
  }
}
