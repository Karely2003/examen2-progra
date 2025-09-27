import { Component, OnInit} from '@angular/core';
import { IAPOD } from '../interfaces/IApod';
import { ApodService } from '../apod-service';
import { RouterModule, Router} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listado-apod',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-apod.html',
  styleUrl: './listado-apod.scss'
})
export class ListadoApod implements OnInit {
  apods: IAPOD[] = [];

  constructor(private apodService: ApodService, private router: Router) {}

  ngOnInit(): void {
    this.cargarApods();
  }

  cargarApods(date?: string, start?: string, end?: string, count?: string) {
    const countNumber = count ? parseInt(count) : undefined;

    this.apodService.getApods(date, start, end, countNumber).subscribe(lista => {
      this.apods = lista;
    });
  }

  verDetalle(apod: IAPOD) {
    this.router.navigate(['/detalle-apod', apod.date]);
  }
}