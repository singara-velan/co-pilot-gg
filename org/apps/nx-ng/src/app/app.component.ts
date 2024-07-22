import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { D3CircleComponent } from './d3-circle/d3-circle.component';
import { CodingSuggestionsComponent } from './coding-suggestions/coding-suggestions.component'; // Import CodingSuggestionsComponent

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, D3CircleComponent, CodingSuggestionsComponent], // Add CodingSuggestionsComponent here
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx-ng';
}
