import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent implements OnInit {
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  color: ThemePalette = "accent";
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  diameter: number = 45

  constructor() { }

  ngOnInit(): void {
  }

}
