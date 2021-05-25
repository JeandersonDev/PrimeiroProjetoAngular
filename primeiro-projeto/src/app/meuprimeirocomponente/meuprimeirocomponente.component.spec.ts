import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuprimeirocomponenteComponent } from './meuprimeirocomponente.component';

describe('MeuprimeirocomponenteComponent', () => {
  let component: MeuprimeirocomponenteComponent;
  let fixture: ComponentFixture<MeuprimeirocomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuprimeirocomponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuprimeirocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
