import { Component , OnInit } from '@angular/core';
import{ProductCardComponent} from '../product-card/product-card.component'
import { CommonModule } from '@angular/common';
import { RatingPipe } from '../rating.pipe';
import * as productData from '../../../json/products.json';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [ProductCardComponent,RatingPipe],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  products: any[] = [];
  ngOnInit(): void {
    this.products = (productData as any).default;
  }

}
