import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText:string=faker.lorem.sentence();
  enteredText:string="";
  userInput(el:string ){
    console.log("what jumka->" +el)
    this.enteredText=el;
  
  
  }
  compare(r1:string,el:string){
    if(!el) return 'pending'
    return r1===el? 'correct': 'incorrrect';
  
}

}