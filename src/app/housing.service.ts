import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore, getDoc, getDocs, query } from '@angular/fire/firestore';
import { HousingLocation } from './housing-location-model';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  firestore = inject(Firestore);

  //url = "http://localhost:3000/locations"; 
  // il hostez cu netfifly

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const queryLocs = query(collection(this.firestore, 'locations'));

      return getDocs(queryLocs).then((result) => {
        return result.docs.map((d) => {
          const data = d.data();
          return {
            ...data as HousingLocation,
            docId: d.id,
            refId: d.ref
          };
        });
      });
      
      // const response = await fetch(this.url);
      // if (response.ok) {
      //   return await response.json();
      // }
      // console.error('Failed to fetch housing locations:', response.status);
      // return [];
    } catch (error) {
      console.error('Error fetching housing locations:', error);
      return [];
    }
  }


  async getHousingLocationsById(id: string): Promise<HousingLocation | undefined> {
    try {
      const refId = doc(this.firestore, `locations/${id}`)
      return getDoc(refId).then((d) => {
        const data = d.data();
        return {
          ...data as HousingLocation,
            docId: d.id,
            refId: d.ref
        };
      });
      // const response = await fetch(`${this.url}/${id}`);
      // if (response.ok) {
      //   return await response.json();
      // }
      // console.error('Failed to fetch housing location:', response.status);
      // return undefined;
    } catch (error) {
      console.error('Error fetching housing location:', error);
      return undefined;
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
