import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleBarrasComponent } from './doble-barras.component';

describe('DobleBarrasComponent', () => {
  let component: DobleBarrasComponent;
  let fixture: ComponentFixture<DobleBarrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DobleBarrasComponent]
    });
    fixture = TestBed.createComponent(DobleBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
