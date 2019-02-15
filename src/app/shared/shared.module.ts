import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, AgGridModule.withComponents([]), CommonModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class SharedModule {}
