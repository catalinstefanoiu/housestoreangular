import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore, getDoc, getDocs, query } from '@angular/fire/firestore';
import { HousingLocation } from './housing-location-model';

@Injectable({
  providedIn: 'root' // Provides this service at the root level, making it available throughout the app
})
export class HousingService {
  firestore = inject(Firestore); 
  // Inject Firestore instance for database interactions

  constructor() { }

  /**
   * Fetches all housing locations from Firestore.
   * @returns A promise that resolves to an array of HousingLocation objects.
   */

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const queryLocs = query(collection(this.firestore, 'locations'));
      // Query Firestore for all 'locations' documents

      return getDocs(queryLocs).then((result) => {
        return result.docs.map((d) => {
          const data = d.data(); // Extract data from each document.
          return {
            ...data as HousingLocation,
            docId: d.id,
            refId: d.ref
          };
        });
      });
    } catch (error) {
      console.error('Error fetching housing locations:', error);
      return [];
    }
  }

  /**
   * Fetches a specific housing location by its Firestore document ID.
   * @param id - Firestore document ID.
   * @returns A promise that resolves to a HousingLocation object or undefined if not found.
   */

  async getHousingLocationsById(id: string): Promise<HousingLocation | undefined> {
    try {
      const refId = doc(this.firestore, `locations/${id}`) // Reference a specific document in Firestore.
      return getDoc(refId).then((d) => {
        const data = d.data();
        return {
          ...data as HousingLocation,
            docId: d.id, // Assign the document ID.
            refId: d.ref // Store document reference.
        };
      });
    } catch (error) {
      console.error('Error fetching housing location:', error);
      return undefined;
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
  //[Formular HTML] --> [Componentă: submitApplication()] --> [Service: submitApplication()] --> Console.log
}
