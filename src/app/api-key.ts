import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiKey {
  public static readonly nasaApiKey = 'vIwLftweKsZuJih7bickfdRBahAh6gyuVgfQq0y6'
  public static readonly nasaUrl = 'https://api.nasa.gov/planetary'
}
