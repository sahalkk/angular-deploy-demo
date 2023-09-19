import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'new-reactive-form',
  templateUrl: './new-reactive-form.component.html',
  styleUrls: ['./new-reactive-form.component.css']
})
export class NewReactiveFormComponent {
  form = new FormGroup({
    account: new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
      ],UsernameValidators.shouldBeUnique),
      password: new FormControl('',Validators.required)

    })
  })

  username = this.form.get('account.username');
  password = this.form.get('account.password')

  submit=() => {      
    this.form.setErrors({
      invalidLogin : true
    })

  }
}
  
