import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path :'create',component : CreateComponent
  },
  {
    path:'list',component : ListComponent
  },
  {
    path:'update/:id',component:UpdateComponent
  },
  {
    path:'view/:id',component:ViewComponent
  },
  {
    path:'',redirectTo:'list', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
