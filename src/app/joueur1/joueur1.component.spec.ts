import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Joueur1Component } from './joueur1.component';

describe('Joueur1Component', () => {
  let component: Joueur1Component;
  let fixture: ComponentFixture<Joueur1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Joueur1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Joueur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
