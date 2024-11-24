import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent<T> implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() data: any = [];
  @Output() filterChanged = new EventEmitter<any>();
  @Output() toggleChanged = new EventEmitter<any>();
  @Output() viewActionClicked = new EventEmitter<any>();
  @Input() selectedStatus!: string;

  dataSource = new MatTableDataSource<T>();
  // selectedStatus = 'all';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.dataSource.data = this.data;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
  }

  applyStatusFilter(event: any) {
    this.selectedStatus = event.value;
    this.emitFilters();
  }

  private emitFilters() {
    this.filterChanged.emit({
      search: this.dataSource.filter,
      status: this.selectedStatus,
    });
  }

  changeStatus(object: object, index: number) {
    this.toggleChanged.emit({
      object,
      index,
    });
  }

  viewDetails(object: any) {
    console.log(`object`, object);
    this.viewActionClicked.emit({object , isClicked: true})
  }
}
