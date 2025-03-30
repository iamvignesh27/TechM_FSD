import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { TextTruncatePipe } from '../../pipes/text-truncate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TextTruncatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[] = [
    {
      id: 1,
      title: 'New Collection Launch',
      body: 'Discover our latest spring collection featuring trendy designs and comfortable styles. Perfect for the modern lifestyle.'
    },
    {
      id: 2,
      title: 'Special Holiday Offers',
      body: 'Get ready for the holiday season with exclusive deals and discounts on selected items. Limited time offer!'
    },
    {
      id: 3,
      title: 'Sustainability Initiative',
      body: 'We are proud to announce our new eco-friendly packaging and sustainable product line, making a positive impact on the environment.'
    },
    {
      id: 4,
      title: 'Tech Gadgets Sale',
      body: 'Exciting discounts on the latest tech gadgets. Grab yours before the stock runs out!'
    },
    {
      id: 5,
      title: 'Fashion Trends 2025',
      body: 'Stay ahead with our fashion forecast for 2025. Discover what’s trending in the world of fashion.'
    },
    {
      id: 6,
      title: 'Home Decor Essentials',
      body: 'Upgrade your home with our stylish and modern home decor essentials. Elevate your living space today!'
    }
  ];

  featuredProducts = [
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      description: 'Experience crystal-clear sound quality with our premium noise-canceling headphones.',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'
    },
    {
      id: 2,
      title: 'Smart Fitness Watch',
      description: 'Track your health and fitness goals with our advanced smartwatch featuring heart rate monitoring and GPS.',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80'
    },
    {
      id: 3,
      title: 'Professional Camera Kit',
      description: 'Capture life’s moments in stunning detail with our professional-grade camera package.',
      price: 799.99,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80'
    },
    {
      id: 4,
      title: 'Gaming Laptop',
      description: 'Unleash the gamer in you with our high-performance gaming laptop featuring RTX graphics.',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80'
    },
    {
      id: 5,
      title: 'Flagship 5G Smartphone',
      description: 'Experience lightning-fast performance and stunning visuals with our latest flagship 5G smartphone.',
      price: 399.99,
      image: 'https://www.lifewire.com/thmb/-cA-9xF6JPmgnriyHU0KUWCirKY=/fit-in/3224x2579/filters:no_upscale():max_bytes(150000):strip_icc()/gs10e-photo13-HeroHoriz-dfd14396a8514f4ab9d48f9bfb56cbd3.jpg'
    },
    {
      id: 6,
      title: 'Smart Home Assistant',
      description: 'Control your home with voice commands using our AI-powered smart home assistant.',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&q=80'
    }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Static data used for demo. Uncomment below if using API.
    // this.apiService.getPosts().subscribe(
    //   posts => this.posts = posts.slice(0, 5)
    // );
  }
}
