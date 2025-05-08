import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOtherPageComponent } from './header-other-page.component';

describe('HeaderOtherPageComponent', () => {
  let component: HeaderOtherPageComponent;
  let fixture: ComponentFixture<HeaderOtherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderOtherPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOtherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
