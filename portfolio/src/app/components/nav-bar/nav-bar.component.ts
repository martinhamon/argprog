import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    @Input() isAuthenticated: boolean= true;
    @Output() LogOutClick = new EventEmitter();
    @Output() LogInClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onLogOutClick( boolLog : boolean):void{

    console.log("LogOut");
    this.LogOutClick.emit(boolLog);
  }

  onLogInClick(boolLog : boolean): void
  {
    console.log("LogIn");
    this.LogInClick.emit(boolLog);
  }
}
