import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'startup';

  convertedObj:any = "";
  convert(objArray:any) {
    console.log(objArray);
    this.convertedObj = JSON.stringify(objArray['result']);
    alert(this.convertedObj.length)

    for (let index = 0; index < this.convertedObj.length; index++) {
      if(this.convertedObj[index].Hours != undefined)
      this.convertedObj= this.convertedObj[index].Hours;
    }
    
    console.log(this.convertedObj)
  }
  onError(err:any) {
    this.convertedObj = err
    console.log(err);
  }


  
}
