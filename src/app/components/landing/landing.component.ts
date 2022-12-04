import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

interface Testimonio{
  title: string,
  description: string,
  name: string
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations:[
    trigger('view', [
      state('in', style({
        opacity: '1',
        transform: 'translateY(0vh)'
      })),
      state('out', style({
        opacity: '0.2',
        transform: 'translateY(30vh)'
      })),
      transition('in => out',[
        animate('.5s')
      ]),
      transition('out => in',[
        animate('.5s')
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {

  testimonios:Array<Testimonio> = [{
    title: "lorem",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo, impedit asperiores molestias rem consequuntur sunt obcaecati, a voluptatum facilis veniam optio dolores aspernatur maxime quaerat, debitis nulla dolore. Fuga.",
    name: "Lorem ipsum"
  },{
    title: "lorem",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo, impedit asperiores molestias rem consequuntur sunt obcaecati, a voluptatum facilis veniam optio dolores aspernatur maxime quaerat, debitis nulla dolore. Fuga.",
    name: "Lorem ipsum"
  },{
    title: "lorem",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo, impedit asperiores molestias rem consequuntur sunt obcaecati, a voluptatum facilis veniam optio dolores aspernatur maxime quaerat, debitis nulla dolore. Fuga.",
    name: "Lorem ipsum"
  },{
    title: "lorem",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo, impedit asperiores molestias rem consequuntur sunt obcaecati, a voluptatum facilis veniam optio dolores aspernatur maxime quaerat, debitis nulla dolore. Fuga.",
    name: "Lorem ipsum"
  }]

  move:boolean = false;

  sight(){
    if(window.scrollY > window.innerHeight*0.70){
      this.move = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
