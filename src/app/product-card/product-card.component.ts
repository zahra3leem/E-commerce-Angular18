import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CardDetailsComponent } from '../product-details/card-details.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingPipe } from '../rating.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardDetailsComponent, RouterLink, RatingPipe,FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() productItem: any;

}
