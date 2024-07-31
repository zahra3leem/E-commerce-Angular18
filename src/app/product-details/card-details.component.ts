import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPipe } from '../rating.pipe';
import * as productData from '../../../json/products.json';
import { CartComponent } from '../cart/cart.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule, RatingPipe ,CartComponent,RouterLink],
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  @Input() id: string = '';
  data: any = productData;
  products: any[] = [];
  product: any = null;

  ngOnInit() {
    this.products = this.data.default;
    console.log(this.id);
    console.log(this.products);
    this.product = this.products.find((el) => el.id == this.id);
  }
}
