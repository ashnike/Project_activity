import { Component, OnInit } from '@angular/core';
import productData from '../../../assets/data/db.json';
interface products {
  id: Number;
  name: String;
  category_id: Number;
  description: String;
  price: Number;
  is_available: Boolean;
  rating: Number;
  review: Number;
  vendor_name: String;
  warranty: Number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  product: products[] = productData;
  ngOnInit(): void {}
}
