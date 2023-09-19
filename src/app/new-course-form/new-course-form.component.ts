import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })

  removeTopic(topic: AbstractControl){
    if(topic instanceof FormControl) {
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index)
    }
  }

  addToTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
  }

  get topics(){
    return this.form.get('topics') as FormArray
  }
}
