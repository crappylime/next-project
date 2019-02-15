import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchTableComponent } from './components/search-table/search-table.component';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, SearchRoutingModule],
  declarations: [SearchContainerComponent, SearchFormComponent, SearchTableComponent, ProfileSidebarComponent]
})
export class SearchModule {}
