import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // showsecret = false;
  // log = [] ;

  // show() {
  //   this.showsecret=!this.showsecret ;
  //   this.log.push(this.log.length + 1) ;
  // }
  // getcolor() {
    // return this.logs >= 5 ?'blue':'transparent';
  // }
  loadedfeature= 'recipe' ;
  onNavigate(feature: string){
    this.loadedfeature=feature ;
  }
}
