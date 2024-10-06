import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalAvenueComponent } from './capital-avenue.component';

describe('CapitalAvenueComponent', () => {
  let component: CapitalAvenueComponent;
  let fixture: ComponentFixture<CapitalAvenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalAvenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapitalAvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
