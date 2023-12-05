import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoOneThingComponent } from './do-one-thing/do-one-thing.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'do-one-thing', component: DoOneThingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
