import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersoanlesComponent } from './datos-persoanles.component';


describe('DatosPersoanlesComponent', () => {
  let component: DatosPersoanlesComponent;
  let fixture: ComponentFixture<DatosPersoanlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosPersoanlesComponent]
    });
    fixture = TestBed.createComponent(DatosPersoanlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
