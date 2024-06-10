import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, FooterComponent, MatButtonModule, RouterLink]
})
export class HomeComponent {

}
