import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedIconsComponent } from './included-icons.component';

describe('IncludedIconsComponent', () => {
  let component: IncludedIconsComponent;
  let fixture: ComponentFixture<IncludedIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
