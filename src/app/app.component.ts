import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './navegation/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comsy-master';
}
