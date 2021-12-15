import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyects-card',
  templateUrl: './proyects-card.component.html',
  styleUrls: ['./proyects-card.component.css']
})
export class ProyectsCardComponent implements OnInit {
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  constructor() { }

  ngOnInit(): void {
  }

}
