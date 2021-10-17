import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WebStorageService } from './web-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-reactive-forms-example';
  data:any[]=[];
  myForm!: FormGroup;
  searchvalue:string='';
  noOfSpan:Number=5;
  testData: any;
constructor(private http:HttpClient,
  private webStorageService:WebStorageService){}
  ngOnInit(){
    this.getData();
  }


  add(){
    let newEmployeeDetails={
      "id": Math.floor(Math.random()*100-1),
      "first_name": `madhu${Math.floor(Math.random()*100-1)}`,
      "last_name": `singh${Math.floor(Math.random()*100-1)}`,
      "email": `madhu${Math.floor(Math.random()*100-1)}codingthesmartway.com`
    }
    this.webStorageService.addNewDetails(newEmployeeDetails).subscribe(res=>{
      alert('Data successfully added')
      console.log(res)
    },err=>{
      alert('something went wrong ')
    })
  }

  getData(){
    this.webStorageService.getAllDetails().subscribe(res=>{
    console.log(res,this.testData)
    this.testData=res;
    },err=>{
      alert('something went wrong ')
    })
  }

  delete(id?:number){
    let existId= Math.floor(Math.random()*100-1);
    this.webStorageService.deleteDetail(existId).subscribe(res=>{
      alert('Data successfully Deleted')
      console.log(res)
    },err=>{
      alert('something went wrong ')
    })
  }

  // update(id:any,data){
  //   this.webStorageService.updateDetails(data).subscribe(res=>{
  //     alert('Data successfully Updated')
  //   },err=>{
  //     alert('something went wrong ')
  //   })
  // }
}
