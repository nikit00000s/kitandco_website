import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowLeafsComponent } from './yellow-leafs.component';

describe('YellowLeafsComponent', () => {
  let component: YellowLeafsComponent;
  let fixture: ComponentFixture<YellowLeafsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowLeafsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowLeafsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
