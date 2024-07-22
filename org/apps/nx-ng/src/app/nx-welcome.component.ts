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

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}