import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;
  text = '';
  pessoas = [{
    nome: "Thiago",
    sobrenome: "Oliveira"
  },{
    nome: "Maria",
    sobrenome: "Silva"
  },{
    nome: "Joao",
    sobrenome: "Pereira"
  },{
    nome: "Marcio",
    sobrenome: "Santos"
  }];

  constructor (){}

  ngOnInit(){
    console.log(this.pessoas)
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10){
        clearInterval(interval)
      }
    },1000)
  }

  clicou(): void{
    console.log("foi clicado");
  }

}
