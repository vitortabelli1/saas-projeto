import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main4Component } from './main-4.component';

describe('Main4Component', () => {
  let component: Main4Component;
  let fixture: ComponentFixture<Main4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
