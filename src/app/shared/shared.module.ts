import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [
    SidenavComponent,
    TopbarComponent,
    CapitalizePipe,
    ModalComponent
  ],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule , CapitalizePipe],
})
export class SharedModule {}
