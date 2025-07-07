import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

interface Country {
  name: string;
  flag: string;
  capital: string[];
  area: number;
  population: number;
  region: string;
}

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent {
  countries: Country[] = [];
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this.countryService.getCountries().subscribe({
      next: (data) => {
        this.countries = data.sort((a, b) => a.region.localeCompare(b.region));
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
}
