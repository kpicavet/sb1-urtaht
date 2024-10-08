import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salutation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold mb-4">Welcome to Your Meal Planner!</h2>
          <p class="text-xl mb-6">Plan your meals for the week and eat healthier.</p>
          <div class="flex space-x-4">
            <button (click)="generateMealPlan()" class="bg-white text-purple-600 hover:bg-purple-100 font-bold py-2 px-6 rounded-full transition duration-300 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Generate Meal Plan
            </button>
            <button (click)="goToCalendar()" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-2 px-6 rounded-full transition duration-300 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              View Calendar
            </button>
          </div>
        </div>
        <svg class="w-40 h-40 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M6 3V2h2v1h6V2h2v1h1a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h1zm0 2H5v9h10V5H6zm2 3h2v2H8V8zm0 3h2v2H8v-2zm3-3h2v2h-2V8zm0 3h2v2h-2v-2z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
  `
})
export class SalutationComponent {
  generateMealPlan() {
    console.log('Generating meal plan...');
    // TODO: Implement meal plan generation logic
  }

  goToCalendar() {
    console.log('Navigating to calendar...');
    // TODO: Implement navigation to calendar page
  }
}