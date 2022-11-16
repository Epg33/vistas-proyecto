import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('back', [
      state('clear', style({
        backgroundColor: 'rgba(48, 47, 47, 0.37)',
        color: '#eee'
      })),
      state('dark', style({
        backgroundColor: 'transparent',
        color: '#111'
      })),
      transition('clear => dark', [
        animate('1s'),
      ]),
      transition('dark => clear', [
        animate('1s'),
      ])
    ])
  ]
})


export class NavComponent{

  back = false;
  title:any = document.getElementById('nav-title');

  theBack () {
    if(window.scrollY> 20){
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
