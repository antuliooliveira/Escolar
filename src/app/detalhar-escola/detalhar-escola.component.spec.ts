import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharEscolaComponent } from './detalhar-escola.component';

describe('DetalharEscolaComponent', () => {
  let component: DetalharEscolaComponent;
  let fixture: ComponentFixture<DetalharEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
