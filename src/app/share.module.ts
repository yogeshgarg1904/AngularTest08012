import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular/main';



@NgModule({
    imports: [
       AgGridModule.withComponents([])],
    declarations: [],
    exports: [ AgGridModule]
})
export class ShareModule { }
