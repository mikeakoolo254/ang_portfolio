import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive ,} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,

  imports: [RouterModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
