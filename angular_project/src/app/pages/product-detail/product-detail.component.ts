import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    features: [],
    imageUrl: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Custom Product Names
    const productNames: { [key: number]: string } = {
      1: 'Wireless Noise-Canceling Headphones',
      2: 'Smart Fitness Watch',
      3: 'Professional DSLR Camera',
      4: 'High-Performance Gaming Laptop',
      5: 'Flagship 5G Smartphone',
      6: 'Smart Home Automation System'
    };

    // Define Product Prices
    const productPrices: { [key: number]: number } = {
      1: 49.99, // Wireless Noise-Canceling Headphones
      2: 99.99, // Smart Fitness Watch
      3: 799.99, // Professional DSLR Camera
      4: 1299.99, // High-Performance Gaming Laptop
      5: 399.99, // Flagship 5G Smartphone
      6: 149.99  // Smart Home Automation System
    };

    // Define Features for Each Product
    const productFeatures: { [key: number]: string[] } = {
      1: ['Active Noise Cancellation (ANC) – Blocks out background noise for an immersive listening experience.', 'High-Fidelity Sound – Delivers crystal-clear audio with deep bass and balanced treble.', 'Long Battery Life – Provides up to 40 hours of playtime on a single charge.'],
      2: ['Real-Time Health Tracking – Monitors heart rate, blood oxygen levels, and sleep patterns continuously.', 'Activity & Workout Monitoring – Tracks steps, calories burned, and different workout modes for personalized fitness goals.', 'Smart Notifications & Connectivity – Syncs with smartphones for call, message, and app notifications on the go.'],
      3: ['High-Resolution Sensor – Captures ultra-clear and detailed images, even in low-light conditions.', 'Interchangeable Lenses – Supports a variety of lenses for different photography styles, from wide-angle to telephoto.', 'Advanced Image Stabilization – Reduces blurring and shake for sharp, professional-quality photos and videos.'],
      4: ['High-Performance GPU – Equipped with a powerful graphics card (e.g., NVIDIA RTX series) for smooth gaming and high FPS.', 'High Refresh Rate Display – Features a 144Hz or higher screen for ultra-smooth visuals and reduced motion blur.', 'Advanced Cooling System – Uses multiple heat pipes and cooling fans to prevent overheating during intense gameplay.'],
      5: ['Blazing-Fast Connectivity – Supports next-gen 5G networks for ultra-fast downloads, seamless streaming, and low-latency gaming.', 'Pro-Grade Camera System – Advanced multi-lens setup with AI enhancements, night mode, and 8K video recording for stunning photography.', 'High-Refresh-Rate Display – A 120Hz or 144Hz AMOLED display with HDR support delivers ultra-smooth visuals and vibrant colors.'],
      6: ['Voice Control & Automation – Controls smart devices, schedules routines, and automates home tasks via voice commands.', 'Energy Management – Monitors and optimizes energy consumption to reduce electricity costs.', 'Security & Surveillance – Integrates with smart cameras, door locks, and alarms for real-time home security monitoring.']
    };

    // Define Images for Each Product
    const productImages: { [key: number]: string } = {
      1: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      2: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      3: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
      4: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
      5: 'https://www.lifewire.com/thmb/-cA-9xF6JPmgnriyHU0KUWCirKY=/fit-in/3224x2579/filters:no_upscale():max_bytes(150000):strip_icc()/gs10e-photo13-HeroHoriz-dfd14396a8514f4ab9d48f9bfb56cbd3.jpg',
      6: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&q=80'
    };

    // Set the Product Details
    this.product = {
      id,
      name: productNames[id] || `Product ${id}`,
      price: productPrices[id] || 99.99, // Fetch price from productPrices, default to 99.99
      description: `Detailed description for ${productNames[id] || `Product ${id}`}`,
      features: productFeatures[id] || [],
      imageUrl: productImages[id] || 'https://via.placeholder.com/500' // Default image
    };
  }
}
