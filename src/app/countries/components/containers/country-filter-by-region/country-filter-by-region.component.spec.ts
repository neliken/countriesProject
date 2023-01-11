import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFilterByRegionComponent } from './country-filter-by-region.component';

describe('CountryFilterByRegionComponent', () => {
  let component: CountryFilterByRegionComponent;
  let fixture: ComponentFixture<CountryFilterByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryFilterByRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryFilterByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
