import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css',
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;

  notify() {
    window.alert('hn aa gaya notification');
  }
  isContentVisible = false;
  stringContent = 'hey';

  toggleString() {
    if (this.stringContent) {
      this.stringContent = '';
    } else {
      this.stringContent = 'This is the content';
    }
  }
  showContent() {
    this.isContentVisible = true;
  }
  hideContent() {
    this.isContentVisible = false;
  }
  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }
}
