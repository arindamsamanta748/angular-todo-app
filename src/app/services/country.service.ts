import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl =
    'https://restcountries.com/v3.1/independent?status=true&fields=name,capital,region,currency,area,population,flags&page=10';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((country) => ({
          name: country.name.common,
          area: country.area,
          flag: country.flags.svg,
          population: country.population,
          region: country.region,
          capital: country.capital,
        }))
      ),
      catchError((error) => {
        console.error('API Error:', error);
        return throwError(() => new Error('Failed to load country data.'));
      })
    );
  }
}
