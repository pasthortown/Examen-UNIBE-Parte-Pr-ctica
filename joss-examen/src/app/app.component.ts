import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joss-examen';
  numero1 = 0;
  numero2 = 0;
  subtotal = 0;
  iva14 = 0;
  desc = 0;
  resultado = 0;
  descuentoo = 0;
  ivaa = 0.14;
  descu = 0.115;
  

  calcular(operacion: string) {
  this.subtotal = (this.numero1 + this.numero2);
  this.iva14 = (this.subtotal + this.desc * this.ivaa);
  this.desc = (this.subtotal - this.descu);
  this.resultado = (this.subtotal - this.desc + this.iva14)
   
  }
}
