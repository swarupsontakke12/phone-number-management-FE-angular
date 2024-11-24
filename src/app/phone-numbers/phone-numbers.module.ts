import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhoneNumbersComponent } from './list-phone-numbers/list-phone-numbers.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from '../shared/component/table/table.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListPhoneNumbersComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PhoneNumbersModule { }
