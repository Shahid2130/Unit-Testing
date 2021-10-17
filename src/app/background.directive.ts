import { Directive, ElementRef, HostListener, OnInit, Renderer2,Input } from "@angular/core";


@Directive({
    selector:'[backGroundColorChange]'
})

export class BackgroundColorChange implements OnInit{
    constructor(private el :ElementRef,private renderer:Renderer2){}
   // @Input() backGroundColorChange: any;
    spn!:HTMLElement;
    ngOnInit(){
       // console.log(this.backGroundColorChange)
       // console.log(this.el.nativeElement)
    }

    @HostListener('mouseover') 
     changeColor(){
     this.renderer.setStyle(this.el.nativeElement,'background','red');
    
    // for(let i=0;i<=this.backGroundColorChange;i++){
    // this.spn= document.createElement('span');
    // this.spn.style.background='green';
    // this.spn.innerText=`I am new span ${i} `
    //  this.renderer.appendChild(this.el.nativeElement,this.spn)
    }
    
     

     @HostListener('mouseout') 
     changeColorBack(){
     this.renderer.setStyle(this.el.nativeElement,'background-color','rgb(72, 72, 202)');
    //  let ele=document.getElementsByTagName('span');
    //  console.log(ele,this.el.nativeElement,)
    //  for(let i =0;i<ele.length;i++){
    //      console.log(ele[i],ele.length)
    //      ele[i].remove()
    //  }
     
       // this.el.nativeElement.removeChild()
    //    ele.forEach(element => {
    //        element,remove();
    //    });
     
     }
    
}