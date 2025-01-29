import { Component } from '@angular/core';
import { SecondComponentComponent } from '../second-component/second-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule, SecondComponentComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  inputExample = '';
  snippet = `import {Component, input} from '@angular/core';

    @Component({/*...*/})
    export class NewComponent {
      // Declare an input named 'value' with a default value of zero.
      value = input(0);
    }`;

  snippet0 = `
  Then, in the parent component's template, you can bind to the input like so:
    
    &lt;custom-slider [value]='50' /&gt;
  `;
}
