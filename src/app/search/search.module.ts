import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchContainerComponent } from './search-container.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, SearchRoutingModule],
  declarations: [SearchContainerComponent]
})
export class SearchModule {}
