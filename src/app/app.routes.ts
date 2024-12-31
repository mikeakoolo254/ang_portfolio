import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PagesComponent } from './pages/pages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



export const routes: Routes = [
    {path:'projects', component: ProjectsComponent},
    {path:'contacts', component: ContactsComponent},
    {path:'services', component: ServicesComponent},
    {path:'skills', component: SkillsComponent},
    {path:'about', component: AboutComponent},
    {path:'', component: PagesComponent, pathMatch: 'full'},
    {path: '**', component: PagenotfoundComponent },
];
