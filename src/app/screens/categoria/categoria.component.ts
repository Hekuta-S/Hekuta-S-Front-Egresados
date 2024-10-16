import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'], standalone: true,
  imports: [FormsModule, InputTextModule, InputSwitchModule, CardModule, ButtonModule]
  
})
export class CategoriaComponent {
  value: string | undefined;
  checked: boolean = false;
}
