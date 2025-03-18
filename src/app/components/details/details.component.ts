import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { HousingLocation } from '../../housing-location-model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute); // Inject ActivatedRoute for route parameters
  housingService = inject(HousingService); // Inject HousingService
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = this.route.snapshot.params['id']; // Obține ID-ul locației de locuit din parametrii rutei (URL).
    this.housingService.getHousingLocationsById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation; // Așteaptă ca promisiunea returnată de getHousingLocationsById() să fie rezolvată și apoi execută o funcție callback care primește detaliile locației (housingLocation).
      // Assign fetched data
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '', // ?? Dacă firstName este null sau undefined, atunci folosește un string gol ''.
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
    alert("Well Done! Your House was booked");
  }
}