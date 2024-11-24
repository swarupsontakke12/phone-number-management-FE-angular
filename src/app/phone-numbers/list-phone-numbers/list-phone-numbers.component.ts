import { Component, OnInit } from '@angular/core';
import { PhoneNumberService } from '../services/phone-number.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';

@Component({
  selector: 'app-list-phone-numbers',
  templateUrl: './list-phone-numbers.component.html',
  styleUrls: ['./list-phone-numbers.component.css'],
})
export class ListPhoneNumbersComponent implements OnInit {
  isLoading: boolean = true;
  selectedFilterValue: string = '';
  displayedColumns: string[] = [
    'srNo',
    'number',
    'status',
    'messages',
    'messageCount',
    'action',
  ];
  phoneData: Array<any> = [];
  filterValue: string = 'all';
  constructor(
    private numberService: PhoneNumberService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.numberService.listPhoneNumbers().subscribe({
      next: (response: any) => {
        this.isLoading = false;

        if (response && response.data.length) {
          this.phoneData = response.data;
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error fetching phone numbers in component:', error);
      },
      complete: () => {
        this.isLoading = false;
        console.log('Phone number list fetch completed');
      },
    });
  }

  getActionData(data: any) {
    if (data) {
      const matchingElement = this.phoneData.findIndex(
        (element) => element.id === data.object.id
      );

      if (matchingElement !== -1) {
        const updatedElement = {
          ...this.phoneData[matchingElement],
          status:
            this.phoneData[matchingElement].status === 'active'
              ? 'inactive'
              : 'active',
        };

        this.phoneData = [
          ...this.phoneData.slice(0, matchingElement),
          updatedElement,
          ...this.phoneData.slice(matchingElement + 1),
        ];
      }
    }
  }

  getFilteredValue(value: any): void {
    this.isLoading = true;
    this.filterValue = value?.status;
    if (value) {
      this.numberService.filteredData(value?.status.toLowerCase()).subscribe({
        next: (response) => {
          if (response && response.data.length) {
            this.isLoading = false;
            this.phoneData = response.data;
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error fetching phone numbers in component:', error);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  openModal(object: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        key1: object.number,
        key2: object.messageCount,
        key3: object.status,
        key4: object.messages,
        title: 'Phone Details',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The modal was closed');
    });
  }

  getPopupAction(data: any): void {
    this.openModal(data.object);
  }
}
