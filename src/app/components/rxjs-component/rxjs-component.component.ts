import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-component',
  imports: [],
  templateUrl: './rxjs-component.component.html',
  styleUrl: './rxjs-component.component.scss',
})
export class RxjsComponentComponent {
  snippet = `private getDropdownValues(): void {
    this.service
      .getCusomters()
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
        this.form1.updateValues(MODEL.CUSTOMER, customers);
        this.form2.updateValues(MODEL.CUSTOMER, this.headerSvc.customers.value);
      });
    this.form2.updateValues(MODEL.PICKTYPE, PICK_TYPES);
  }`;
}
