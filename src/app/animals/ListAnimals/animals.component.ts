import { Component,OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { NgFor } from '@angular/common';
import { Animal } from '../animal';



@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [NgFor],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent implements OnInit
{
  animalist! : Animal[];


  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.animalsService.getAllAnimals().subscribe(animals =>this.animalist = animals);
  }




}
