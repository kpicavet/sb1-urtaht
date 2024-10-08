import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalutationComponent } from '../salutation/salutation.component';
import { MealPlanComponent } from '../meal-plan/meal-plan.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SalutationComponent, MealPlanComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <app-salutation></app-salutation>
      <app-meal-plan></app-meal-plan>
    </div>
  `
})
export class DashboardComponent {}