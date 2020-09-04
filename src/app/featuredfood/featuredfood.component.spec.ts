import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedfoodComponent } from './featuredfood.component';

describe('FeaturedfoodComponent', () => {
  let component: FeaturedfoodComponent;
  let fixture: ComponentFixture<FeaturedfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
