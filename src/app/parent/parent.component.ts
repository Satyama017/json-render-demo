import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitStateService } from '../services/unit-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {
  constructor(private unitState: UnitStateService, private router: Router) {}
  unit: any;

  ngOnInit(): void {
    this.unitState.unit$.subscribe((unit) => {
      this.unit = unit;
    });
  }

  @Input() childContent: string = '';
}
