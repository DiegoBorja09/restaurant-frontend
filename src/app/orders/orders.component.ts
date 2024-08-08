// src/app/orders/orders.component.ts

import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  displayedColumns: string[] = ['id', 'status', 'recipe', 'createdAt', 'updatedAt'];
  page: number = 1;
  limit: number = 6;
  total: number = 0;
  numberOfOrders = 1;

  constructor(private orderService: OrderService) {}
  private intervalId: any;
  ngOnInit(): void {
    this.loadOrders();
    this.intervalId = setInterval(() => {
      window.location.reload();
    }, 15000);
  }

  loadOrders(): void {
    this.orderService.getOrderHistory(this.page, this.limit).subscribe(
      (data) => {
        this.orders = data.orders;
        this.total = data.total;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }

  nextPage(): void {
    if ((this.page * this.limit) < this.total) {
      this.page++;
      this.loadOrders();
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadOrders();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.total / this.limit);
  }

  createOrders(): void {
    if (this.numberOfOrders < 1) {
      Swal.fire({
        title: 'Error!',
        text: 'Number of orders must be at least 1',
        icon: 'error'
      });
      return;
    }
    Swal.fire({
      title: 'Success!',
      text: `${this.numberOfOrders} order(s) is being processed`,
      icon: 'success'
    });
    this.orderService.createOrders(this.numberOfOrders)
      .subscribe(response => {
        this.loadOrders(); // Actualizar la lista de órdenes
      }, error => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to create orders',
          icon: 'error'
        });
      });
  }
  
}





