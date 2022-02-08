import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examen_parcial';
  i = 0;
  nombre= "";
  n = 0;
  letter = this.nombre.charAt(0);
  resp = "";
  

	
	
resulta(): String{

  this.nombre;
  this.n ;
  this.letter = this.nombre.charAt(0)
 

  var resp = ""

  var factorial = 1; 
	for (var i=1; i<=this.n; i++) {
		factorial = factorial * i; 
	}

	var fibo = [0,1];
  var fiboNumero = 0;
	for(var e=2; e <= this.n; e++){
		fibo.push(fibo[e-1] + fibo[e-2]);
    if(e===this.n){
      fiboNumero = fibo[e]
    }
	}

  resp =this.letter+fiboNumero+"-"+factorial

  console.log(resp)
  
  

  

  return this.resp

};

}