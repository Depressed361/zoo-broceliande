import { Component,OnInit } from '@angular/core';
import { VeterinaryService } from '../veterinary.service';
import { veterinaryRapport } from '../veterinary/rapport-veto';
import { routes } from '../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-rapport',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-rapport.component.html',
  styleUrl: './list-rapport.component.css'
})
export class ListRapportComponent {
 // Assurez-vous d'avoir déclaré animalId dans votre classe

  animalId: string | null = null;
  vetoRapport: veterinaryRapport[] = [];
  constructor( private veterinaryService: VeterinaryService,
    private route:ActivatedRoute
    ,private router: Router

   ) { }

  ngOnInit(): void {
    this.animalId = this.route.snapshot.paramMap.get('id');
    if(this.animalId){
      this.veterinaryService.getAllRapport(parseInt(this.animalId)).subscribe((response) => {
        this.vetoRapport = response;
      });
    }




  }

}
