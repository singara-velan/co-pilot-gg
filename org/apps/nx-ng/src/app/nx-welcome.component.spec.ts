import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('NxWelcomeComponent', () => {
    let component: NxWelcomeComponent;
    let fixture: ComponentFixture<NxWelcomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NxWelcomeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NxWelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display the welcome message', () => {
        const welcomeElement: HTMLElement = fixture.nativeElement;
        const welcomeMessage = welcomeElement.querySelector('h1')?.textContent;
        expect(welcomeMessage).toContain('Welcome to Nx Angular');
    });

    it('should display the random number', () => {
        component.randomNumber = 42;
        fixture.detectChanges();
        const randomNumberElement: HTMLElement = fixture.nativeElement;
        const randomNumber = randomNumberElement.querySelector('p')?.textContent;
        expect(randomNumber).toContain('Random Number: 42');
    });

    it('should generate a random number within the specified range', () => {
        const min = 1;
        const max = 100;
        const randomNumber = component.getRandomNumber(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });
});