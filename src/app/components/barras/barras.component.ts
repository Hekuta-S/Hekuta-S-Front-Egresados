import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  @Input() estudiantes: any[] = []; // Recibe los datos de los estudiantes
  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // Agrupar estudiantes por programa y contar cuántos hay por cada uno
    const conteoPorPrograma = this.getEstudiantesPorPrograma();

    // Extraer los nombres de los programas y las cantidades de estudiantes
    const programas = Object.keys(conteoPorPrograma);
    const cantidades = Object.values(conteoPorPrograma);

    // Generar colores aleatorios para cada programa
    const backgroundColors = programas.map(() => this.getRandomColor());

    this.data = {
      labels: programas, // Etiquetas basadas en los programas
      datasets: [
        {
          label: 'Cantidad de Estudiantes',
          backgroundColor: backgroundColors,
          borderColor: backgroundColors,
          data: cantidades // Los valores corresponden a la cantidad de estudiantes por programa
        }
      ]
    };

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

  // Método para contar los estudiantes por programa
  getEstudiantesPorPrograma() {
    const conteo: { [key: string]: number } = {};
    this.estudiantes.forEach(estudiante => {
      const programa = estudiante.PROGRAMA;
      if (conteo[programa]) {
        conteo[programa] += 1;
      } else {
        conteo[programa] = 1;
      }
    });
    return conteo;
  }

  // Método para generar colores aleatorios
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
