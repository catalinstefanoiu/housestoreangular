import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore, getDoc, getDocs, query, addDoc } from '@angular/fire/firestore';
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

  /*async addInitialHousingData() {
    const housingData: HousingLocation[] = [
      {
        id: 0,
        name: 'Acme Fresh Start Housing',
        city: 'Chicago',
        state: 'IL',
        photo: '/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
        availableUnits: 4,
        wifi: true,
        laundry: true
      },
      {
        id: 1,
        name: 'A113 Transitional Housing',
        city: 'Santa Monica',
        state: 'CA',
        photo: '/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg',
        availableUnits: 0,
        wifi: false,
        laundry: true
      },
      {
        id: 2,
        name: 'Warm Beds Housing Support',
        city: 'Juneau',
        state: 'AK',
        photo: '/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
        availableUnits: 1,
        wifi: false,
        laundry: false
      },
      {
        id: 3,
        name: 'Homesteady Housing',
        city: 'Chicago',
        state: 'IL',
        photo: '/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
        availableUnits: 1,
        wifi: true,
        laundry: false
      },
      {
        id: 4,
        name: 'Happy Homes Group',
        city: 'Gary',
        state: 'IN',
        photo: '/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
        availableUnits: 1,
        wifi: true,
        laundry: false
      },
      {
        id: 5,
        name: 'Hopeful Apartment Group',
        city: 'Oakland',
        state: 'CA',
        photo: '/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
        availableUnits: 2,
        wifi: true,
        laundry: true
      },
      {
        id: 6,
        name: 'Seriously Safe Towns',
        city: 'Oakland',
        state: 'CA',
        photo: '/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
        availableUnits: 5,
        wifi: true,
        laundry: true
      },
      {
        id: 7,
        name: 'Hopeful Housing Solutions',
        city: 'Oakland',
        state: 'CA',
        photo: '/assets/r-architecture-GGupkreKwxA-unsplash.jpg',
        availableUnits: 2,
        wifi: true,
        laundry: true
      },
      {
        id: 8,
        name: 'Seriously Safe Towns',
        city: 'Oakland',
        state: 'CA',
        photo: '/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg',
        availableUnits: 10,
        wifi: false,
        laundry: false
      },
      {
        id: 9,
        name: 'Capital Safe Towns',
        city: 'Portland',
        state: 'OR',
        photo: '/assets/webaliser-_TPTXZd9mOo-unsplash.jpg',
        availableUnits: 6,
        wifi: true,
        laundry: true
      }
    ];

    const housingCollection = collection(this.firestore, 'locations'); // Same collection name!

    for (const location of housingData) {
      await addDoc(housingCollection, location);
      console.log(`Added: ${location.name}`);
    }
    console.log('All data added successfully!');
  }
    */
}
