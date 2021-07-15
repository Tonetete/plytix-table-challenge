import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleViewComponent } from './toggle-view.component';

describe('ToggleViewComponent', () => {
  let component: ToggleViewComponent;
  let fixture: ComponentFixture<ToggleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('WHEN call toggleView THEN should toggle showTable value', () => {
    expect(component.showTable).toBeTrue();

    component.toggleView();
    fixture.detectChanges();

    expect(component.showTable).toBeFalse();
  });
});
