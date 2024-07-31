import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardDetailsComponent } from '../product-details/card-details.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CardDetailsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
