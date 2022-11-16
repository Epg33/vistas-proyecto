import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations:[
    trigger('view', [
      state('in', style({
        opacity: '1',
        transform: 'translateY(-3vh)'

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

  move:boolean = false;

  sight(){
    if(window.scrollY > window.innerHeight*0.85){
      this.move = true;
    }
    else {
      this.move = false
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
