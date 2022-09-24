import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'startup';

  csvContent: any;
  convertedArray: Array<any> = [];
  properties: any = '';



  onFileSelect(input:any) {
    const files = input.files;
    var fileTypes = ['csv']; //acceptable file types

    if (files && files.length) {
      var extension = input.files[0].name.split('.').pop().toLowerCase(), //file extension from input file
        //Validating type of File Uploaded
        isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types
      //console.log(isSuccess);
      //console.log("Filename: " + files[0].name);
      // console.log("Type: " + files[0].type);
      //  console.log("Size: " + files[0].size + " bytes");
      var that = this;
      //Flag to check the Validation Result
      if (isSuccess) {
        const fileToRead = files[0];

        const fileReader = new FileReader();

        fileReader.onload = function (fileLoadedEvent:any) {
          const textFromFileLoaded = fileLoadedEvent.target.result;
          that.csvContent = textFromFileLoaded;

          //Flag is for extracting first line
          let flag = false;
          // Main Data
          let objarray: Array<any> = [];
          //Properties
          let prop: Array<any> = [];
          //Total Length
          let size: any = 0;

          for (const line of that.csvContent.split(/[\r\n]+/)) {
            if (flag) {
              let obj = {};
              for (let k = 0; k < size; k++) {
                //Dynamic Object Properties
                //obj[prop[k]] = line.split(',')[k];
              }
              objarray.push(obj);
            } else {
              //First Line of CSV will be having Properties
              for (let k = 0; k < line.split(',').length; k++) {
                size = line.split(',').length;
                //Removing all the spaces to make them usefull
                prop.push(line.split(',')[k].replace(/ /g, ''));
              }
              flag = true;
            }
          }
          //All the values converted from CSV to JSON Array
          that.convertedArray = objarray;
          that.properties = [];
          //Object Keys of Converted JSON Array
          that.properties = prop;

          let finalResult = {
            properties: that.properties,
            result: that.convertedArray,
          };
          //On Convert Success
          console.log(finalResult);
        };

        fileReader.readAsText(fileToRead, 'UTF-8');
      } else {
        //On Error
        console.error('Invalid File Format!');
      }
    }
  }
}
