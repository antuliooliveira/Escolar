import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEscolaComponent } from './editar-escola.component';

describe('EditarEscolaComponent', () => {
  let component: EditarEscolaComponent;
  let fixture: ComponentFixture<EditarEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
