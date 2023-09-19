import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'reactive-forms-exercise',
  templateUrl: './reactive-forms-exercise.component.html',
  styleUrls: ['./reactive-forms-exercise.component.css']
})
export class ReactiveFormsExerciseComponent {
  form : FormGroup;
  
  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: ['',Validators.required,PasswordValidators.validOldPassword],
      newPassword: ['',Validators.required],
      confirmPassword: ['',Validators.required],
    },{
      validator:PasswordValidators.passwordsShouldMatch})
  }

  get oldPassword() {return this.form.get('oldPassword')}
  get newPassword() {return this.form.get('newPassword')}
  get confirmPassword() {return this.form.get('confirmPassword')}

}
