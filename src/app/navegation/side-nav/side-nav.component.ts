import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { TopNavComponent } from '../top-nav/top-nav.component';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, TopNavComponent, RouterModule, RouterOutlet],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})

export class SideNavComponent {
  showFiller = false;
}
