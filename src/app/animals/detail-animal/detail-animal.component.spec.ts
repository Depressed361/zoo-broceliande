import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnimalComponent } from './detail-animal.component';

describe('DetailAnimalComponent', () => {
  let component: DetailAnimalComponent;
  let fixture: ComponentFixture<DetailAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailAnimalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
