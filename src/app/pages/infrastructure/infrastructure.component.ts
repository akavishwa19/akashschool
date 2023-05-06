import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss'],
  animations:[
    trigger('fade',[

      transition('void => *',[
        style({backgroundcolor:'blue',opacity:0}),
        animate(2000,style({backgroundcolor:'yellow',opacity:1}))
      ])
    ])
  ]
})
export class InfrastructureComponent {

}
