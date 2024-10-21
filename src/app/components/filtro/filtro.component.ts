import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  nameTerm: string = '';
  cedulaTerm: string = '';
  selectedPrograma: string = '';
  selectedUnidad: string = '';
  selectedDate: string = '';

  @Input() programas: string[] = [];
  @Input() unidades: string[] = [];
  @Input() selectedCategories: any[] = [];

  @Output() nameSearchEvent = new EventEmitter<string>();
  @Output() cedulaSearchEvent = new EventEmitter<string>();
  @Output() programaSearchEvent = new EventEmitter<string>();
  @Output() unidadSearchEvent = new EventEmitter<string>();
  @Output() dateSearchEvent = new EventEmitter<string>();



   isCategorySelected(key: string): boolean {
    return this.selectedCategories.some(category => category.key === key);
  }
  onNameInputChange(event: any) {
    this.nameTerm = event.target.value.toLowerCase();
    this.nameSearchEvent.emit(this.nameTerm);
  }

  onCedulaInputChange(event: any) {
    this.cedulaTerm = event.target.value;
    this.cedulaSearchEvent.emit(this.cedulaTerm);
  }

  onProgramaChange(event: any) {
    this.selectedPrograma = event.target.value;
    this.programaSearchEvent.emit(this.selectedPrograma);
  }

  onUnidadChange(event: any) {
    this.selectedUnidad = event.target.value;
    this.unidadSearchEvent.emit(this.selectedUnidad);
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    this.dateSearchEvent.emit(this.selectedDate);
  }
}
