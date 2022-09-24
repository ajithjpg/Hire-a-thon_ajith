import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'startup';

  convertedObj=[];
  

  convert(objArray:any) {
    console.log(objArray);
    const data = objArray['result'];

    for (let index = 0; index < data.length; index++) {
     this.convertedObj = data
      
    }
    for (let i = 0; i < this.convertedObj.length; i++) {
      const element = this.convertedObj[i];
      console.log(element['Hours']<5)
      
      
    }
    
    
    console.log(this.convertedObj)
  }
  onError(err:any) {
    this.convertedObj = err
    console.log(err);
  }


  
}
