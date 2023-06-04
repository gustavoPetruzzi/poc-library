import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-poc-library',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      poc-library works!
    </p>
  `,
  styles: [
  ]
})
export class PocLibraryComponent {

}
