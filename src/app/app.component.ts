import {Component, OnInit} from '@angular/core';
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  const operator = 1;
  const fatores = [1, 2, 5];
  const operation = '+';
  const notOperation = '-';

  ngOnInit() {
    document.getElementById('valor').focus();
  }


  add(number) {
    var input = Number(document.getElementById('valor').value);
    number = number * this.operator;
    input = input + number;
    document.getElementById('valor').value = input.toString();
  }

  alteraInput(numero) {
    if(document.getElementById('toggle').innerText === '+') {
      this.subtract(numero);
    } else {
      this.add(numero);
    }
  }

  alteraFator() {
    for (var i = 0; i < this.fatores.length; i++) {
      this.fatores[i] = this.fatores[i] * this.operator;
    }
  }

  resetFator() {
    this.fatores = [1, 2, 5];
  }

  toggleX() {
   switch (this.operator) {
     case undefined:
       this.operator = 1;
       document.getElementById('operador').innerText = 'x' + this.operator.toString();
       // document.getElementById('fator').innerText = '+' + this.operator.toString();
       break;
     case 1:
       this.operator = 10;
       document.getElementById('operador').innerText = 'x' + this.operator.toString();
       this.alteraFator()
       break;
     case 10:
       this.operator = 100;
       document.getElementById('operador').innerText = 'x' + this.operator.toString();
       this.resetFator();
       this.alteraFator();
       break;
     case 100:
       this.operator = 1000;
       document.getElementById('operador').innerText = 'x' + this.operator.toString();
       this.resetFator();
       this.alteraFator();
       break;
     case 1000:
       this.operator = 1;
       document.getElementById('operador').innerText = 'x' + this.operator.toString();
       this.alteraFator();
       this.resetFator();
       break;
   }
  console.log(this.operator);
  }

  clearInput() {
    document.getElementById('valor').value = '';
  }

  setSubtract() {
     if(this.operation === '+') {
       this.operation = this.notOperation;
       this.notOperation = '+';
       document.getElementById('fator').style.backgroundColor = "#d62d20";
       document.getElementById('fator2').style.backgroundColor = "#d62d20";
       document.getElementById('fator3').style.backgroundColor = "#d62d20";

     } else {
       this.operation = '+';
       this.notOperation = '-';
       document.getElementById('fator').style.backgroundColor = "#008744";
       document.getElementById('fator2').style.backgroundColor = "#008744";
       document.getElementById('fator3').style.backgroundColor = "#008744";
     }

  }

  subtract(number) {
    var input = Number(document.getElementById('valor').value);
    number = number * this.operator;
    input = input - number;
    if(input < 0) {
      input = 0;
    }
    document.getElementById('valor').value = input.toString();
  }

}
