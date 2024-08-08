import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  ingredients: any[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients() {
    this.inventoryService.getIngredients().subscribe(data => {
      this.ingredients = data;
    });
  }
}

