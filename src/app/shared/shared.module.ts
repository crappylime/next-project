import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, AgGridModule.withComponents([]), CommonModule, ReactiveFormsModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, ReactiveFormsModule]
})
export class SharedModule {}
