import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals/animal';
import { AnimalsService } from '../animals/animals.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinary',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './veterinary.component.html',
  styleUrl: './veterinary.component.css'
})
export class VeterinaryComponent implements OnInit{
  animalist!: Animal[];


  constructor(private animalsService: AnimalsService
    , private router: Router
  ) {  }

  ngOnInit(): void {
  this.animalsService.getAllAnimals().subscribe
  (animalist =>this.animalist = animalist);

}

//goToRAPPORT(pokemon: Animal) {
 // this.router.navigate(['/animals/veterinary', pokemon.id]);
//}
}
