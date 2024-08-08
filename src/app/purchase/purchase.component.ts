import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchases: any[] = [];
  displayedColumns: string[] = ['ingredientName', 'quantity', 'purchaseDate']; // Añadir purchaseDate aquí
  page: number = 1;
  limit: number = 6;
  total: number = 0;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.getPurchases();
  }

  getPurchases(): void {
    this.inventoryService.getPurchaseHistory(this.page, this.limit).subscribe(response => {
      this.purchases = response.purchases;
      this.total = response.total;
    });
  }

  nextPage(): void {
    if ((this.page * this.limit) < this.total) {
      this.page++;
      this.getPurchases();
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.getPurchases();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.total / this.limit);
  }
}
