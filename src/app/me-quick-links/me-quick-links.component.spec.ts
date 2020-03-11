import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeQuickLinksComponent } from './me-quick-links.component';

describe('MeQuickLinksComponent', () => {
  let component: MeQuickLinksComponent;
  let fixture: ComponentFixture<MeQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
