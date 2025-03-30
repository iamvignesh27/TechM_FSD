import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems = [
    { path: '/home', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];
}