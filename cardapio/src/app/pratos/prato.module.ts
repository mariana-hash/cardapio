import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/componentes/star/star.module";
import { PratoInfoComponent } from "./prato-info.component";
import { PratoListComponent } from "./prato-list.component";

@NgModule({
  declarations: [
    PratoListComponent,
    PratoInfoComponent
  ],
  imports: [
    CommonModule,
    StarModule,
    FormsModule,
    RouterModule.forChild([

      {
        path: 'pratos', component: PratoListComponent
      },
      {
        path: 'pratos/info/:id', component: PratoInfoComponent
      }
    ])
  ]
})
export class PratoModule {

}
