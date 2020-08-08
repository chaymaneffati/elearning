import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormationsComponent } from './edit-formations.component';

describe('EditFormationsComponent', () => {
  let component: EditFormationsComponent;
  let fixture: ComponentFixture<EditFormationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
