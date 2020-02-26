import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NueralBackgroundComponent } from './nueral-background.component';

describe('NueralBackgroundComponent', () => {
  let component: NueralBackgroundComponent;
  let fixture: ComponentFixture<NueralBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NueralBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NueralBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
