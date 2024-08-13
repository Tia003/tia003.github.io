import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/Home.component';
import { FolderDetailComponent } from './Pages/FolderDetail/FolderDetail.component';
import { LoginComponent } from './Pages/LoginComponents/LoginFrame/Login.component';
import { UserComponent } from './Widgets/User/User.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'folderDetail/:id', component: FolderDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [ ]
})
export class AppRoutingModule { }
