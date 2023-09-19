import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  log(x:any) {
    console.log(x);
  }

  onSubmit(f:any){
    console.log(f)
  }

  select(check:any){
    console.log(check)
  }

  contactMethods = [
    {id:1, name:'email'},
    {id:2, name:'phone'},
  ]
  
}
