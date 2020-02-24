import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodezooMainComponent } from './codezoo-main.component';

describe('CodezooMainComponent', () => {
  let component: CodezooMainComponent;
  let fixture: ComponentFixture<CodezooMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodezooMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodezooMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
