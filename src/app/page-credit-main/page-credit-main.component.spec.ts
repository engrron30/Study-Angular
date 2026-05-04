import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreditMainComponent } from './page-credit-main.component';

describe('PageCreditMainComponent', () => {
  let component: PageCreditMainComponent;
  let fixture: ComponentFixture<PageCreditMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCreditMainComponent]
    });
    fixture = TestBed.createComponent(PageCreditMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
