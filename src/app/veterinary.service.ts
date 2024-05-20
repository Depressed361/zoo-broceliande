import { Injectable } from '@angular/core';
import { Observable, catchError, of, pipe, tap } from 'rxjs';
import { veterinaryRapport } from './veterinary/rapport-veto';
import { RAPPORT } from './veterinary/mock-rapport-veto';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  constructor() { }

   getAllRapport(animalId:number): Observable<veterinaryRapport[]> {
    return of(RAPPORT.filter(rapport => rapport.animalId === animalId)).pipe(
      tap((response) => console.log(response)),
      catchError(error => {
        console.log('error',error);
        return of([]);
       })
    );



  }



}
