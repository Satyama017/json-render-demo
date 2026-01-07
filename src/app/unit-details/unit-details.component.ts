import { Component, OnInit } from '@angular/core';
import { UnitStateService } from '../services/unit-state.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unit-details.component.html',
})
export class UnitDetailsComponent implements OnInit {
  unit: any;

  constructor(private unitState: UnitStateService, private router: Router) {}

  ngOnInit() {
    this.unitState.unit$.subscribe((unit) => {
      if (!unit) {
        this.router.navigate(['/']);
        return;
      }
      this.unit = unit;
    });
  }
}
