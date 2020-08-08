import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploisComponent } from './add-emplois.component';

describe('AddEmploisComponent', () => {
  let component: AddEmploisComponent;
  let fixture: ComponentFixture<AddEmploisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmploisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
