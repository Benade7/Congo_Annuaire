import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
