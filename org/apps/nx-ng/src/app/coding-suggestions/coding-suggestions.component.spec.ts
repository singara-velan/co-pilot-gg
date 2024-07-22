import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodingSuggestionsComponent } from './coding-suggestions.component';

describe('CodingSuggestionsComponent', () => {
  let component: CodingSuggestionsComponent;
  let fixture: ComponentFixture<CodingSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingSuggestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodingSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
