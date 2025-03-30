import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { id: 1, name: 'Premium Wireless Headphones', price: 49.99, description: 'Description' , imageUrl:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
    { id: 2, name: 'Smart Fitness Watch', price: 99.99, description: 'Description' , imageUrl:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80'},
    { id: 3, name: 'Professional Camera Kit', price: 799.99, description: 'Description' , imageUrl:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80'},
    { id: 4, name: 'Gaming Laptop', price: 1299.99, description: 'Description' , imageUrl:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80'},
    { id: 5, name: 'Flagship 5G Smartphone', price: 399.99, description: 'Description' , imageUrl:'https://www.lifewire.com/thmb/-cA-9xF6JPmgnriyHU0KUWCirKY=/fit-in/3224x2579/filters:no_upscale():max_bytes(150000):strip_icc()/gs10e-photo13-HeroHoriz-dfd14396a8514f4ab9d48f9bfb56cbd3.jpg'},
    { id: 6, name: 'Smart Home Assistant', price: 149.99, description: 'Description' , imageUrl:'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&q=80'}
  ];

  ngOnInit() {
    // Component initialization logic
  }
}
