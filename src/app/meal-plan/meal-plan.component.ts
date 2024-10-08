import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Meal {
  name: string;
  description: string;
  calories: number;
  image: string;
}

interface MealPlan {
  [key: string]: Meal;
}

@Component({
  selector: 'app-meal-plan',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg shadow-lg">
      <div class="flex justify-between items-center mb-6">
        <button (click)="previousDay()" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <h3 class="text-2xl sm:text-3xl font-bold text-indigo-800">{{ currentDate | date:'EEEE, MMMM d' }}</h3>
        <button (click)="nextDay()" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- Overview Card -->
        <div class="bg-white p-6 rounded-xl shadow-md transform transition duration-500 hover:shadow-xl">
          <h4 class="text-xl font-bold mb-4 text-indigo-800">Day Overview</h4>
          <ul class="space-y-3">
            <li *ngFor="let meal of meals | keyvalue" class="flex items-center">
              <span [ngClass]="{'text-green-500': meal.key === 'breakfast', 'text-yellow-500': meal.key === 'lunch', 'text-blue-500': meal.key === 'dinner'}" class="w-8 h-8 mr-3 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                <svg *ngIf="meal.key === 'breakfast'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                <svg *ngIf="meal.key === 'lunch'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <svg *ngIf="meal.key === 'dinner'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path></svg>
              </span>
              <span class="flex-grow">
                <span class="block text-sm font-medium text-gray-900 capitalize">{{ meal.key }}</span>
                <span class="block text-sm text-gray-500">{{ meal.value.name }}</span>
              </span>
              <span class="text-sm font-medium text-indigo-600">{{ meal.value.calories }}</span>
            </li>
          </ul>
          <p class="mt-6 text-lg font-semibold text-indigo-800">Total Calories: <span class="text-2xl font-bold text-indigo-600">{{ totalCalories }}</span> kcal</p>
        </div>
        
        <!-- Detailed Meal Cards -->
        <div class="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div *ngFor="let meal of meals | keyvalue" class="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:shadow-xl flex flex-col">
            <div [ngClass]="{'bg-green-100': meal.key === 'breakfast', 'bg-yellow-100': meal.key === 'lunch', 'bg-blue-100': meal.key === 'dinner'}" class="p-4 flex-grow">
              <div class="flex items-center mb-4">
                <span [ngClass]="{'text-green-600': meal.key === 'breakfast', 'text-yellow-600': meal.key === 'lunch', 'text-blue-600': meal.key === 'dinner'}" class="w-10 h-10 mr-3 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <svg *ngIf="meal.key === 'breakfast'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                  <svg *ngIf="meal.key === 'lunch'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  <svg *ngIf="meal.key === 'dinner'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path></svg>
                </span>
                <h5 class="text-xl font-bold capitalize" [ngClass]="{'text-green-800': meal.key === 'breakfast', 'text-yellow-800': meal.key === 'lunch', 'text-blue-800': meal.key === 'dinner'}">{{ meal.key }}</h5>
              </div>
              <img [src]="meal.value.image" [alt]="meal.value.name" class="w-full h-48 object-cover rounded-lg mb-4 shadow-md">
              <div>
                <p class="font-bold text-lg mb-2 text-gray-800">{{ meal.value.name }}</p>
                <p class="text-sm text-gray-600 mb-3">{{ meal.value.description }}</p>
                <p class="text-sm font-medium" [ngClass]="{'text-green-600': meal.key === 'breakfast', 'text-yellow-600': meal.key === 'lunch', 'text-blue-600': meal.key === 'dinner'}">Calories: {{ meal.value.calories }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MealPlanComponent implements OnInit {
  currentDate: Date = new Date();
  meals: MealPlan = {
    breakfast: {
      name: 'Oatmeal with Berries',
      description: 'Hearty oatmeal topped with fresh mixed berries',
      calories: 300,
      image: 'https://example.com/oatmeal.jpg'
    },
    lunch: {
      name: 'Grilled Chicken Salad',
      description: 'Fresh salad with grilled chicken breast and vinaigrette',
      calories: 450,
      image: 'https://example.com/chicken-salad.jpg'
    },
    dinner: {
      name: 'Salmon with Roasted Vegetables',
      description: 'Baked salmon fillet with a side of roasted seasonal vegetables',
      calories: 550,
      image: 'https://example.com/salmon.jpg'
    }
  };

  get totalCalories(): number {
    return Object.values(this.meals).reduce((total, meal) => total + meal.calories, 0);
  }

  ngOnInit() {
    // Initialize component
  }

  previousDay() {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 1));
    // TODO: Fetch meal plan for the previous day
  }

  nextDay() {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 1));
    // TODO: Fetch meal plan for the next day
  }
}