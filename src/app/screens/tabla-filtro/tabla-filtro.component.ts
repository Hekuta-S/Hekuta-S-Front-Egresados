import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-filtro',
  templateUrl: './tabla-filtro.component.html',
  styleUrls: ['./tabla-filtro.component.css']
})
export class TablaFiltroComponent {
  estudiantes = [
    {
      UNIDAD: 'SECCIONAL AGUACHICA',
      PERIODO: '2024-2',
      TIDG_ABREVIATURA: 'CC',
      PEGE_DOCUMENTOIDENTIDAD: '1003039624',
      PEGE_ID: '233698',
      ESTP_ID: '191625',
      PEUN_ID: '1432',
      TPPA_ID: '2',
      PEGE_FECHAEXPEDICION: '2018-01-18',
      PEGE_LUGAREXPEDICION: 'BECERRIL',
      PENG_PRIMERAPELLIDO: 'Martínez',
      PENG_SEGUNDOAPELLIDO: 'Gómez',
      PENG_PRIMERNOMBRE: 'Carlos',
      PENG_SEGUNDONOMBRE: 'Andrés',
      NOMBRES: 'Carlos Andrés Martínez Gómez',
      PROG_CODIGOPROGRAMA: 'A001',
      PROGRAMA: 'Ingeniería',
      FECHA_INGRESO_ESTP: '2022-01-15',
      FECHA_INGRESO_ESTU: '2020-02-01',
      PENSUM_DESCRIPCION: 'Activo',
      JORN_DESCRIPCION: 'Diurna',
      ESTADO_PENSUM: 'Activo',
      PESUM_CREDITOS: 180,
      PEGE_DIRECCION: 'Calle 123',
      PEGE_MAIL: 'carlos@example.com',
      PENG_EMAILINSTITUCIONAL: 'carlos@unicesar.edu.co',
      INFE_ESTRATO: '3',
      ESTP_JOVENACCION: false,
      ESTP_GENERACION_E: true,
      ESTP_VICTIMA: false,
      ESTP_AFRO: false,
      INST_CODIGOSNP: 'SNP123456',
      PENG_RH: 'O+',
      PEGE_TELEFONO: '3001234567',
      PEGE_TELEFONOCELULAR: '3001234567',
      PENG_FECHANACIMIENTO: '1999-08-15',
      EDAD: 25,
      SNP: 'SNP456',
      PENG_SEXO: 'M',
      MATERIAS_TOMADAS: 40,
      MATERIAS_GANADAS: 38,
      PAGE_IDNACIMIENTO: '20001',
      PAGE_IDNACIONALIDAD: 'CO',
      CIGE_IDLUGARNACIMIENTO: 'VALLEDUPAR',
      ESTP_PERIODOACADEMICO: 10,
      ESTP_PERIODOCRONOLOGICO: 13,
      ESTP_PROMEDIOGENERAL: 3.9,
      ESTP_PROMEDIOSEMESTRE: 4.7,
      ESTP_CREDITOSAPROBADOS: 186,
      PENG_RH_1: 'O+',
      SITE_DESCRIPCION: 'ACTIVO',
      CATE_DESCRIPCION: 'EGRESADO'
    },
    {
      UNIDAD: 'UNIVERSIDAD POPULAR DEL CESAR',
      PERIODO: '2024-2',
      TIDG_ABREVIATURA: 'CC',
      PEGE_DOCUMENTOIDENTIDAD: '1003249234',
      PEGE_ID: '263894',
      ESTP_ID: '231249',
      PEUN_ID: '1432',
      TPPA_ID: '2',
      PEGE_FECHAEXPEDICION: '2021-06-04',
      PEGE_LUGAREXPEDICION: 'AGUACHICA - CESAR',
      PENG_PRIMERAPELLIDO: 'López',
      PENG_SEGUNDOAPELLIDO: 'Pérez',
      PENG_PRIMERNOMBRE: 'Juan',
      PENG_SEGUNDONOMBRE: 'Esteban',
      NOMBRES: 'Juan Esteban López Pérez',
      PROG_CODIGOPROGRAMA: 'A002',
      PROGRAMA: 'Medicina',
      FECHA_INGRESO_ESTP: '2021-09-20',
      FECHA_INGRESO_ESTU: '2020-09-01',
      PENSUM_DESCRIPCION: 'Activo',
      JORN_DESCRIPCION: 'Diurna',
      ESTADO_PENSUM: 'Activo',
      PESUM_CREDITOS: 180,
      PEGE_DIRECCION: 'Calle 456',
      PEGE_MAIL: 'juan@example.com',
      PENG_EMAILINSTITUCIONAL: 'juan@unicesar.edu.co',
      INFE_ESTRATO: '4',
      ESTP_JOVENACCION: false,
      ESTP_GENERACION_E: true,
      ESTP_VICTIMA: false,
      ESTP_AFRO: false,
      INST_CODIGOSNP: 'SNP654321',
      PENG_RH: 'A+',
      PEGE_TELEFONO: '3206543210',
      PEGE_TELEFONOCELULAR: '3206543210',
      PENG_FECHANACIMIENTO: '2000-10-10',
      EDAD: 24,
      SNP: 'SNP789',
      PENG_SEXO: 'M',
      MATERIAS_TOMADAS: 45,
      MATERIAS_GANADAS: 44,
      PAGE_IDNACIMIENTO: '20002',
      PAGE_IDNACIONALIDAD: 'CO',
      CIGE_IDLUGARNACIMIENTO: 'VALLEDUPAR',
      ESTP_PERIODOACADEMICO: 10,
      ESTP_PERIODOCRONOLOGICO: 11,
      ESTP_PROMEDIOGENERAL: 3.8,
      ESTP_PROMEDIOSEMESTRE: 4.5,
      ESTP_CREDITOSAPROBADOS: 175,
      PENG_RH_1: 'A+',
      SITE_DESCRIPCION: 'ACTIVO',
      CATE_DESCRIPCION: 'EGRESADO'
    }
    // Añade más estudiantes siguiendo este mismo formato
  ];

  filteredStudents: any[] = this.estudiantes;
  programas: string[] = [];
  unidades: string[] = [];

  constructor() {
    // Extraer programas y unidades únicas
    this.programas = [...new Set(this.estudiantes.map(student => student.PROGRAMA))];
    this.unidades = [...new Set(this.estudiantes.map(student => student.UNIDAD))];
  }

  // Métodos de filtrado como antes...
  filterByUnidad(unidad: string) {
    if (unidad) {
      this.filteredStudents = this.estudiantes.filter(student => student.UNIDAD === unidad);
    } else {
      this.filteredStudents = this.estudiantes;
    } // Verifica el resultado
  }
  // Filtrar por nombre
  filterByName(query: string) {
    this.filteredStudents = this.estudiantes.filter(student =>
      student.NOMBRES.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Filtrar por cédula
  filterByCedula(query: string) {
    this.filteredStudents = this.estudiantes.filter(student =>
      student.PEGE_DOCUMENTOIDENTIDAD.includes(query)
    );
  }

  // Filtrar por carrera
  filterByPrograma(programa: string) {
    if (programa) {
      this.filteredStudents = this.estudiantes.filter(student => student.PROGRAMA === programa);
    } else {
      this.filteredStudents = this.estudiantes;
    }
  }

  // Filtrar por fecha de ingreso
  filterByDate(fecha: string) {
    if (fecha) {
      this.filteredStudents = this.estudiantes.filter(student => student.FECHA_INGRESO_ESTP === fecha);
    } else {
      this.filteredStudents = this.estudiantes;
    }
  }

  
}