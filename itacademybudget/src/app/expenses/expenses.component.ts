import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { Expense } from '../shared/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expensesService: ExpensesService) {}

  loadExpenses(): void {
    this.expenses = this.expensesService.loadExpenses();
  }

  ngOnInit(): void {
    this.loadExpenses();
  }
}
