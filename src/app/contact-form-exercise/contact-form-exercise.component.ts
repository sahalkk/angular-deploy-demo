import { Component } from '@angular/core';

@Component({
  selector: 'contact-form-exercise',
  templateUrl: './contact-form-exercise.component.html',
  styleUrls: ['./contact-form-exercise.component.css']
})
export class ContactFormExerciseComponent {
  categories = [
    {id:1, name:'Developement'},
    {id:2, name:'Art'},
    {id:3, name:'Languages'},
  ]

  submit = (course:any) => {
    console.log(course)
  }

}
