import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doble-barras',
  templateUrl: './doble-barras.component.html',
  styleUrls: ['./doble-barras.component.css']
})
export class DobleBarrasComponent implements OnInit {
  @Input() estudiantes: any[] = []; // Recibe la lista de estudiantes

  data: any;
  options: any;

  ngOnInit() {
    this.generarDatos();
    this.configurarOpciones();
  }

  generarDatos() {
    // Agrupar estudiantes por programa
    const programas = this.estudiantes.reduce((acc, estudiante) => {
      const programa = estudiante.PROGRAMA;
      const sexo = estudiante.PENG_SEXO === 'M' ? 'Masculino' : 'Femenino';

      if (!acc[programa]) {
        acc[programa] = { Masculino: 0, Femenino: 0 };
      }

      acc[programa][sexo]++;
      return acc;
    }, {});

    // Crear datos para el gráfico
    const labels = Object.keys(programas); // Nombres de los programas
    const masculinoData = labels.map(label => programas[label].Masculino);
    const femeninoData = labels.map(label => programas[label].Femenino);

    // Configuración de datos para PrimeNG Chart
    this.data = {
      labels: labels, // Nombres de los programas
      datasets: [
        {
          label: 'Masculino',
          backgroundColor: '#42A5F5', // Color para barras masculinas
          data: masculinoData
        },
        {
          label: 'Femenino',
          backgroundColor: '#FF6384', // Color para barras femeninas
          data: femeninoData
        }
      ]
    };
  }

  configurarOpciones() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
