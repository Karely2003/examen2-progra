import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApodService } from '../apod-service';
import { IApod } from '../interfaces/IApod';


@Component({
  selector: 'app-detalle-apod',
  imports: [],
  templateUrl: './detalle-apod.html',
  styleUrl: './detalle-apod.scss'
})
export class DetalleApod implements OnInit {
    apod: IApod | null = null;

  constructor(private route: ActivatedRoute, private apodService: ApodService) {}

  ngOnInit(): void {
    const date = this.route.snapshot.paramMap.get('date');
    if (date) {
      this.apodService.getApod(date).subscribe(resultado => this.apod = resultado);
    }
  }
}