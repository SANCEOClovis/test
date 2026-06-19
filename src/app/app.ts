import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Application Angular prête ✅</h1>
    <p>Le front fonctionne correctement.</p>
    <button (click)="getTest()">Get Data</button>
    <div>{{ data }}</div>
  `,
  styles: [],
})
export class App {
  data = '';

  constructor(private testService: TestService) {}

  getTest() {
    console.log('Appel de la méthode getTest()');
    this.testService.getData().subscribe(
      (testData) => {
        this.data = testData;
        console.log('Données récupérées avec succès :', this.data);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      },
    );
  }
}
