import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeFrmComponent } from './equipe-frm.component';

describe('EquipeFrmComponent', () => {
  let component: EquipeFrmComponent;
  let fixture: ComponentFixture<EquipeFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipeFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
