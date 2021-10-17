import { Injectable,ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMetaDataService implements ErrorHandler{

  constructor() { }
public handleError(error:any):void{
  console.error({
    timeStamp: new Date().toISOString(),
    mesage:error.message,
    zone: error.zone
    
  });
  
};


}
