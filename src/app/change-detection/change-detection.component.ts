import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit {
  counter = signal<number>(0);

  constructor() {}

  ngOnInit(): void {}

  increase() {
    this.counter.update((counter) => counter + 1);
  }
}
