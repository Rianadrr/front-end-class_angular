import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { InputComponent } from "./shared/input/input.component";
import { TableComponent } from './shared/table/table.component';
import { Creditur } from './shared/interface/creditur';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-day3';

  creditur: Creditur[] = [
    { name: "Andi", age: 25, occupation: "Karyawan", dp: 6000000, amount: 18000000, salary: 3000000 },
    { name: "Budi", age: 19, occupation: "Pelajar", dp: 4000000, amount: 16000000, salary: 5000000 },
    { name: "Citra", age: 33, occupation: "Wiraswasta", dp: 8000000, amount: 20000000, salary: 2000000 }
  ];

  addLeasing(newItem: Creditur) {
    this.creditur.push(newItem);
  }

  get acceptedLeasing(): Creditur[] {
    return this.creditur.filter(c =>
      c.age >= 21 && c.age <= 55 &&
      c.dp >= (0.3 * c.amount) &&
      c.salary > 3000000
    );
  }

}
