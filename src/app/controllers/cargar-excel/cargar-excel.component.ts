import { Component, EventEmitter, Output } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-cargar-excel',
  templateUrl: './cargar-excel.component.html',
  styleUrls: ['./cargar-excel.component.css']
})
export class CargarExcelComponent {
  @Output() dataEmit = new EventEmitter<any[]>(); // Emitir los datos del Excel
  data: any[] = [];

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);

    if (target.files.length !== 1) {
      console.error('No se puede cargar más de un archivo a la vez.');
      return;
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      // Emitir los datos del Excel
      this.dataEmit.emit(this.data);
    };

    reader.readAsBinaryString(target.files[0]);
  }
}
