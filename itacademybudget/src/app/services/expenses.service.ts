import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { expensesList } from '../shared/DATA';
import { Expense } from '../shared/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private httpClient: HttpClient) {}

  loadExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>('/api/expenses');
  }
  getExpense(id: string): Expense | undefined {
    return expensesList.find((expense) => expense.id === id);
  }
}
