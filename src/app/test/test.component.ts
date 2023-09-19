import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  formData = {
    name: '',
    password: ''
  };

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
    console.log(this.formData);
  }
  
}
