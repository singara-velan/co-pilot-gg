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

    it('should generate a random number between the specified range', () => {
        const min = 1;
        const max = 10;
        const randomNumber = component.getRandomNumber(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });

    it('should return "FizzBuzz" if the number is divisible by 3 and 5', () => {
        const number = 15;
        const result = component.fizzBuzz(number);
        expect(result).toBe('FizzBuzz');
    });

    it('should return "Fizz" if the number is divisible by 3', () => {
        const number = 9;
        const result = component.fizzBuzz(number);
        expect(result).toBe('Fizz');
    });

    it('should return "Buzz" if the number is divisible by 5', () => {
        const number = 10;
        const result = component.fizzBuzz(number);
        expect(result).toBe('Buzz');
    });

    it('should return the number as a string if it is not divisible by 3 or 5', () => {
        const number = 7;
        const result = component.fizzBuzz(number);
        expect(result).toBe(number.toString());
    });

    it('should handle inclusive bounds', () => {
        const min = 1;
        const max = 1;
        const randomNumber = component.getRandomNumber(min, max);
        expect(randomNumber).toBe(min);
    });

    it('should correctly handle reversed bounds', () => {
        const min = 10;
        const max = 1;
        // Depending on implementation, either expect an error or correct behavior
        // For this example, let's assume it corrects the order
        const randomNumber = component.getRandomNumber(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });

    it('should return the same number for equal bounds', () => {
        const minMax = 5;
        const randomNumber = component.getRandomNumber(minMax, minMax);
        expect(randomNumber).toBe(minMax);
    });

    it('should handle negative bounds', () => {
        const min = -10;
        const max = -1;
        const randomNumber = component.getRandomNumber(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });

    it('should consistently return values within bounds over multiple runs', () => {
        const min = 1;
        const max = 100;
        for (let i = 0; i < 1000; i++) {
            const randomNumber = component.getRandomNumber(min, max);
            expect(randomNumber).toBeGreaterThanOrEqual(min);
            expect(randomNumber).toBeLessThanOrEqual(max);
        }
    });
});