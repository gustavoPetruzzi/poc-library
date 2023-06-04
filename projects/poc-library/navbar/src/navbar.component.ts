import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'poc-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input()
  iconUrl: string = '';

  @Output()
  iconClicked = new EventEmitter<boolean>();

  onIconClicked() {
    this.iconClicked.emit(true);
  }

}