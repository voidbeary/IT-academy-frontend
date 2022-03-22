import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ExpenceForm } from './expense-form.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenceFormComponent implements OnInit {
  model = new ExpenceForm('', '', '');
  @Output() expenseUpdated: EventEmitter<void> = new EventEmitter();

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {}

  getModelString(): string {
    return JSON.stringify(this.model);
  }

  onSubmit() {
    this.expensesService.postExpense(this.model).subscribe(() => {
      this.expenseUpdated.emit();
      this.resetForm();
    });
  }
  resetForm() {
    this.model = new ExpenceForm('', '', '');
  }
}
