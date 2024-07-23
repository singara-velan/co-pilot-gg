import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nx-welcome',
  template: '<h1>Welcome to Nx Angular</h1><p>Random Number: {{ randomNumber }}</p>',
  standalone: true, // Mark this component as standalone
})
export class NxWelcomeComponent implements OnInit {
  randomNumber!: number;

  ngOnInit() {
    this.randomNumber = this.getRandomNumber(1, 20);
  }

  /**
   * Generates a random number between the specified minimum and maximum values (inclusive).
   * 
   * @param min The minimum value of the range.
   * @param max The maximum value of the range.
   * @returns A random number between the specified minimum and maximum values.
   */
  getRandomNumber(min: number, max: number): number {
    if (min > max) {
      [min, max] = [max, min]; // Swap min and max if min is greater than max
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Returns a string based on the given number following the FizzBuzz rules.
   * If the number is divisible by 3 and 5, it returns 'FizzBuzz'.
   * If the number is divisible by 3, it returns 'Fizz'.
   * If the number is divisible by 5, it returns 'Buzz'.
   * Otherwise, it returns the number as a string.
   * 
   * @param n The number to check.
   * @returns A string based on the given number following the FizzBuzz rules.
   */
  fizzBuzz(n: number): string { 
    if (n % 3 === 0 && n % 5 === 0) {
      return 'FizzBuzz';
    } else if (n % 3 === 0) {
      return 'Fizz';
    } else if (n % 5 === 0) {
      return 'Buzz';
    } else {
      return n.toString();
    }
  }
}