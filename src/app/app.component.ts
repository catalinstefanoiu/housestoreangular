import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from '@angular/router';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'housestoreangular';

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
  //  this.housingService.addInitialHousingData(); // Only call once to avoid duplicates
  }
}
