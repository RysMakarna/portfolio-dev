import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareProjectComponent } from './square-project.component';

describe('SquareProjectComponent', () => {
  let component: SquareProjectComponent;
  let fixture: ComponentFixture<SquareProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquareProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
