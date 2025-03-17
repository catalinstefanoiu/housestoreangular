import { DocumentReference } from "@angular/fire/firestore";

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