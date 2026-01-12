import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
@Component({
  selector: 'app-directives-practice',
  imports: [NgClass, NgStyle],
  templateUrl: './directives-practice.component.html',
  styleUrl: './directives-practice.component.css',
})
export class DirectivesPracticeComponent {
  // ngFor
  names: string[] = ['Satyam', 'Srushti', 'Pranjal'];
  details = [
    { name: 'Satyam', Contact: '7498256321' },
    { name: 'Srushti', Contact: '7498373799' },
    { name: 'Pranjal', Contact: '9699004142' },
  ];

  // ngIF
  show: boolean = true;
  isHealthy: boolean = true;
  login: boolean = false;

  // @switch, @case, @default
  color: string = 'Black';
  setColor(color: string) {
    this.color = color;
  }

  // ngClass
  highLight: string = 'white';
  EditText(color: string) {
    this.highLight = color;
  }

  isStyle: boolean = false;
}
