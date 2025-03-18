import { DocumentReference } from "@angular/fire/firestore";

/*Defines the structure of a housing location object*/ 

export interface HousingLocation {
    docId: string;
    refId: DocumentReference;
    id: number,
    name: string,
    city: string,
    state: string,
    photo: string,
    availableUnits: number,
    wifi: boolean,
    laundry: boolean,
}