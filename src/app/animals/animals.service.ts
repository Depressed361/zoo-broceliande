import { Injectable } from '@angular/core';
import { Observable, catchError, of, pipe, tap } from 'rxjs';
import { Animal } from './animal';
import { ANIMALS } from './mock-animals';


@Injectable({
  providedIn: 'root'
})
export class AnimalsService {



  getAllAnimals(): Observable<Animal[]> {
    return of(ANIMALS);
  }

  geAnimalByid(id: number): Observable<Animal|undefined> {
    return of(ANIMALS.find(animal => animal.id === id)!).pipe(
      tap((response) => console.log(response)),
      catchError(error => {
        console.log('error',error);
        return of(undefined);
       })

       )






  }

}



