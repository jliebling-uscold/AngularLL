import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-component',
  imports: [],
  templateUrl: './rxjs-component.component.html',
  styleUrl: './rxjs-component.component.scss',
})
export class RxjsComponentComponent {
  snippet = `private getDropdownValues(): void {
    this.dplService
      .getDPLCusomters()
      .pipe(
        map((data: any[]) =>
          data.map((element) => ({
            value: element.id,
            label: element.name,
          })),
        ),
      )
      .subscribe((response) => {
        const customers = response;
        this.searchForm.updateValues(DYNAMIC_PICK_LINE_MODELS.CUSTOMER, customers);
        this.dynamicAssignmentForm.updateValues(DYNAMIC_PICK_LINE_MODELS.CUSTOMER, this.headerSvc.customers.value);
      });
    this.dynamicAssignmentForm.updateValues(DYNAMIC_PICK_LINE_MODELS.PICKTYPE, PICK_TYPES);
  }`;
}
