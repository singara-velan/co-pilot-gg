import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-coding-suggestions',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './coding-suggestions.component.html',
  styleUrl: './coding-suggestions.component.css',
})
export class CodingSuggestionsComponent implements OnInit {
  codingSuggestionsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initiateForm();
  }

  initiateForm() {
    this.codingSuggestionsForm = this.formBuilder.group({
      noOfDataPoints: ['', Validators.required]
    });
  }
  
  onSubmit() {
    // Add your logic here
  }
}
