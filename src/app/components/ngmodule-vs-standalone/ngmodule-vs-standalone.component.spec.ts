import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmoduleVsStandaloneComponent } from './ngmodule-vs-standalone.component';

describe('NgmoduleVsStandaloneComponent', () => {
  let component: NgmoduleVsStandaloneComponent;
  let fixture: ComponentFixture<NgmoduleVsStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgmoduleVsStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmoduleVsStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
