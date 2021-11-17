import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurFrmComponent } from './joueur-frm.component';

describe('JoueurFrmComponent', () => {
  let component: JoueurFrmComponent;
  let fixture: ComponentFixture<JoueurFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoueurFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
