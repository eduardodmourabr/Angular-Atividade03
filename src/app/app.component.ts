import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  valorInput2: number = 0;
  
 mais_um():void{
    this.valorInput2 = this.valorInput2 +1
 }
 menos_um():void{
  this.valorInput2 = this.valorInput2 -1
}
}