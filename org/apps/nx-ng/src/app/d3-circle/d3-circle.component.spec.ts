import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D3CircleComponent } from './d3-circle.component';

describe('D3CircleComponent', () => {
  let component: D3CircleComponent;
  let fixture: ComponentFixture<D3CircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3CircleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(D3CircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
