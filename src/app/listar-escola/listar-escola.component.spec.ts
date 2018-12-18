import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEscolaComponent } from './listar-escola.component';

describe('ListarEscolaComponent', () => {
  let component: ListarEscolaComponent;
  let fixture: ComponentFixture<ListarEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
