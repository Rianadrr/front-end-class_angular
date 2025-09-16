import { Component } from '@angular/core';
import { Creditur } from '../interface/creditur';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data: Creditur[] = [];

}
