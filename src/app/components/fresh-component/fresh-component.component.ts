import { Component } from '@angular/core';
import { SecondComponentComponent } from '../second-component/second-component.component';

@Component({
  selector: 'app-fresh-component',
  imports: [SecondComponentComponent],
  templateUrl: './fresh-component.component.html',
  styleUrl: './fresh-component.component.scss',
})
export class FreshComponentComponent {
  showSecondComponent: boolean = false;
  public toggleButtonText: string;
  constructor() {
    this.toggleButtonText = 'What does this do?';
  }

  toggleSecondComponent(): void {
    this.showSecondComponent = !this.showSecondComponent;
  }
  getToggleButtonText(): string {
    return this.showSecondComponent
      ? 'It shows the Second Component'
      : 'What does this do?';
  }
}
