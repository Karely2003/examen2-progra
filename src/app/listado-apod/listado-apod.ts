import { Component, OnInit} from '@angular/core';
import { IApod } from '../interfaces/IApod';
import { ApodService } from '../apod-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-apod',
  imports: [],
  templateUrl: './listado-apod.html',
  styleUrl: './listado-apod.scss'
})
export class ListadoApod implements OnInit {
  apods: IApod[] = [];
  filtroDate: string = '';
  filtroStart: string = '';
  filtroEnd: string = '';
  filtroCount: number | null = null;

  constructor(public apodService: ApodService, private router: Router) {}

  ngOnInit(): void {
    this.cargarApods();
  }

  cargarApods(): void {
    this.apodService.getApods({
      date: this.filtroDate || undefined,
      start_date: this.filtroStart || undefined,
      end_date: this.filtroEnd || undefined,
      count: this.filtroCount || undefined
    }).subscribe(resultado => this.apods = resultado);
  }

  verDetalle(apod: IApod): void {
    this.router.navigate(['/apods', apod.date]);
  }
}