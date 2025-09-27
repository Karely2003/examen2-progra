import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApodService } from '../apod-service';
import { IAPOD } from '../interfaces/IApod';


@Component({
  selector: 'app-detalle-apod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-apod.html',
  styleUrl: './detalle-apod.scss'
})
export class DetalleApod implements OnInit {
    apod?: IAPOD;

  constructor(private route: ActivatedRoute, private apodService: ApodService) {}

  ngOnInit(): void {
    const date = this.route.snapshot.paramMap.get('date');
    if (date) {
      this.apodService.getApods(date).subscribe(lista => {
        this.apod = lista[0]; // Siempre devuelve array aunque sea un solo elemento
      });
    }
  }
}