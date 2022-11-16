import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('back', [
      state('clear', style({
        backgroundColor: 'transparent',
      })),
      state('dark', style({
        backgroundColor: 'rgba(20, 20, 20, 0.95)',
        zIndex: '20000',
        color: '#eff'
      })),
      transition('clear => dark', [
        animate('.3s'),
      ]),
      transition('dark => clear', [
        animate('.3s'),
      ])
    ])
  ]
})


export class NavComponent{

  back:boolean = false;
  title:any = document.getElementById('nav-title');

  theBack () {

    if(window.scrollY> window.innerHeight*0.85){
      this.back = true;
    }
    else {
      this.back = false
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

}
