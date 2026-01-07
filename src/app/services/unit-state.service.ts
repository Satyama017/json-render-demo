import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitStateService {
  private unitSubject = new BehaviorSubject<any>(null);

  unit$ = this.unitSubject.asObservable();

  setUnit(unit: any): void {
    this.unitSubject.next(unit);
  }

  getUnit(): any {
    return this.unitSubject.value;
  }
}
