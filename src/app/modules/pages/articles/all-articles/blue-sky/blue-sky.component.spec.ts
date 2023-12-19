import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueSkyComponent } from './blue-sky.component';

describe('BlueSkyComponent', () => {
  let component: BlueSkyComponent;
  let fixture: ComponentFixture<BlueSkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueSkyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueSkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
