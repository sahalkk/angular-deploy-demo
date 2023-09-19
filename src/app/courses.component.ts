import { Component } from "@angular/core";

@Component({
    selector : 'courses',
    template : `
        {{course.title | uppercase}} <br>
        {{course.students | number}}<br>
        {{course.rating | number:'1.1-1'}}<br>
        {{course.price | currency:'INR'}}<br>
        {{course.releaseDate | date: 'shortDate'}}<br>
        {{text | summary:10}} <br>
        <input [(ngModel)]="inputText"/>
        <p>{{inputText | titleCase}}</p>
    `
})

export class CoursesComponent {
    course = {
        title : "The complete angular course",
        rating : "4.587",
        students : "200500",
        price : "16510",
        releaseDate : new Date(2023, 9, 7)
    }
    text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    inputText: string = '';
}

    


