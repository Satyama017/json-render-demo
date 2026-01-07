import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UnitStateService } from '../services/unit-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  unit: any = null;

  constructor(
    private http: HttpClient,
    private unitState: UnitStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http.get<any>('data/location.json').subscribe((data) => {
      const availableUnits = data.myLocation[0].available.availableUnits;
      const allUnits = availableUnits.flatMap(
        (item: any) => item.recommendUnits || []
      );

      this.unit = allUnits.find((u: any) => u.unitNumber === '99800548');

      this.unitState.setUnit(this.unit);
    });
  }

  openUnit() {
    this.unitState.setUnit(this.unit);
    this.router.navigate(['/unit-details']);
  }
}
