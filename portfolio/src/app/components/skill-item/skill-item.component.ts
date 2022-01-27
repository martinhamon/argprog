import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ComunicationService } from 'src/app/services/comunication-service';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from 'src/app/SkillTemplate';
@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  color: ThemePalette = "accent";
  value = 50;
  diameter: number = 45

  @Input() skill : Skill= new Skill()
  sk: Skill = this.skill
  mode: ProgressSpinnerMode = 'determinate';
  @Output() emitDeleteItem : EventEmitter <Skill>= new EventEmitter();
  constructor(private comunicationService : ComunicationService) { }

  ngOnInit(): void {
  }
  onEdit(){


    this.sk.id=this.skill.id
    this.sk.subtitle=this.skill.subtitle
    this.sk.percent=this.skill.percent
    this. sk.title=this.skill.title
    //Avisar de cambio para guardar datos y actualizar vista
    this.comunicationService.sendMessage(this.sk)




  }
  onDelete(){

    this.sk.id=this.skill.id
    this.sk.subtitle=this.skill.subtitle
    this.sk.percent=this.skill.percent
    this.sk.title=this.skill.title

    this.emitDeleteItem.emit(this.sk)

  }
}
