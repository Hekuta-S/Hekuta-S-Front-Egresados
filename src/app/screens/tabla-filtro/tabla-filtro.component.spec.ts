import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFiltroComponent } from './tabla-filtro.component';

describe('TablaFiltroComponent', () => {
  let component: TablaFiltroComponent;
  let fixture: ComponentFixture<TablaFiltroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaFiltroComponent]
    });
    fixture = TestBed.createComponent(TablaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
