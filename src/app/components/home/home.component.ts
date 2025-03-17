import { Component, inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../../housing-location-model';
import { HousingService } from '../../housing.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, HousingLocationComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject (HousingService);
  filteredLocationList:HousingLocation[] = [];
filter: any;

  constructor() {
    
  }

  ngOnInit(): void {
    console.log('HomeComponent::onInit');
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList; 
      
      this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}