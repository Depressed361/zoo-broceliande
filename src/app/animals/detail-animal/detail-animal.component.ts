import { Component } from '@angular/core';
import { Animal } from '../animal';
import { AnimalsService } from '../animals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-detail-animal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail-animal.component.html',
  styleUrl: './detail-animal.component.css'
})
export class DetailAnimalComponent {

  animal!: Animal;


  constructor(private animalsService: AnimalsService,
     private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

   const animalId: string|null = this.route.snapshot.paramMap.get('id');
    if (animalId) {
      this.animalsService.geAnimalByid(+animalId).subscribe(animal => this.animal = this.animal || animal);
    }
  }

}
