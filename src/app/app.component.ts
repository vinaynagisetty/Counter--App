import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string = "Counter App";
  counter:number=0;
  increment(){
    this.counter=this.counter+1;
  }

  decrement(){

    if(this.counter>0){
    this.counter=this.counter-1;

  }
  else{
    alert("value cannot less than zero");
  }
  }
  reset(){
    this.counter=0;
  }
}
