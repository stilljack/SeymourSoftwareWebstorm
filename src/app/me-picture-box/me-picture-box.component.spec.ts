import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MePictureBoxComponent } from './me-picture-box.component';

describe('MePictureBoxComponent', () => {
  let component: MePictureBoxComponent;
  let fixture: ComponentFixture<MePictureBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MePictureBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MePictureBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
