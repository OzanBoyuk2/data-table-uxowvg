import {Component, ViewChild} from '@angular/core';
import {DataTableResource} from '../data-table/tools/data-table-resource';
import persons from './data-table-demo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;
  totalPages = 34;
  size = 6;
  source: string = `
  <data-table [indexColumn]="false"
              [selectColumn]="true"
              [items]="items"
              [totalPages]="totalPages"
              [size]="size"
              [indexColumnHeader]="'#'"
              [multiExpandableRows]="false"
              (reload)="reloadItems($event)"
              [expandableRows]="true"
              (rowClick)="rowClick($event)"
              (rowDoubleClick)="rowDoubleClick($event)"
              [rowTooltip]="rowTooltip">
    <ng-template #iconExpand let-expanded="expanded">
      <span class="fa fa-lg fa-plus-circle text-info" *ngIf="!expanded"></span>
      <span class="fa fa-lg fa-minus-circle text-warning" *ngIf="expanded"></span>
    </ng-template>
    <ng-template #dataTableExpand let-itemExpand="itemExpand">
      <p class="text-info" *ngIf="itemExpand.NPI != null"><b>NPI :</b>{{itemExpand.NPI}}</p>
      <p class="text-danger" *ngIf="itemExpand.ProviderName != null"><b>Provider Name :</b>{{itemExpand.ProviderName}}</p>
      <p class="text-warning" *ngIf="itemExpand.Status != null"><b>Status :</b> {{itemExpand.Status}}</p>
      <p class="text-info" *ngIf="itemExpand.AssignedTo != null"><b>Assigned to :</b> {{itemExpand.AssignedTo}}</p>
      <p *ngIf="itemExpand.ApplicationType != null"><b>Application type :</b> {{itemExpand.ApplicationType}}</p>
      <p *ngIf="itemExpand.ProviderType != null"><b>Provider Type :</b> {{itemExpand.ProviderType}}</p>
    </ng-template>
    <data-table-column
      [property]="'CaseNumber'"
      [header]="'Number'"
      [sortable]="true"
      [visible]="true"
      [cellColors]="cellColor">
    </data-table-column>
    <data-table-column
      [property]="'NPI'"
      [header]="'NPI'"
      [breakpoints]="'xxs,xs'"
      [sortable]="true">
      <ng-template #dataTableCell let-item="item">
        <button class="btn btn-outline-info btn-sm" (click)="buttonalert(item.NPI)">{{item.NPI}}</button>
      </ng-template>
    </data-table-column>
    <data-table-column
      [property]="'ProviderName'"
      [header]="'Provider Name'"
      [breakpoints]="'xxs,xs,sm'"
      [sortable]="true"
      [visible]="true">
    </data-table-column>
    <data-table-column
      [property]="'Status'"
      [header]="'Status'"
      [breakpoints]="'xxs,xs,sm,md'"
      [sortable]="false">
      <ng-template #dataTableHeader let-item="item">
        <span style="color: rgb(232, 0, 0)">Active</span>
      </ng-template>
      <ng-template #dataTableHeaderExtra>
        <i class="fa fa-filter" aria-hidden="true"></i>
      </ng-template>
      <ng-template #dataTableCell let-item="item">
        <span style="color: grey">
          <span class="fa fa-check" *ngIf="item.Status"></span>
          <span class="fa fa-close" *ngIf="!item.Status"></span>
        </span>
      </ng-template>
    </data-table-column>
    <data-table-column
      [property]="'AssignedTo'"
      [header]="'Assigned to'"
      [sortable]="true"
      [resizable]="true"
      [visible]="true">
    </data-table-column>
    <data-table-column
      [property]="'ApplicationType'"
      [header]="'Application Type'"
      [breakpoints]="'xxs,xs,sm,md'"
      [sortable]="true"
      [visible]="true">
    </data-table-column>
    <data-table-column
      [property]="'ProviderType'"
      [header]="'Provider Type'"
      [breakpoints]="'xxs,xs,sm,md,lgs'"
      [sortable]="true"
      [visible]="true">
    </data-table-column>
  </data-table>
`.trim();
  sourceTypescript: string = `
  import {Component, ViewChild} from '@angular/core';
import {DataTableResource} from '../data-table/tools/data-table-resource';
import persons from './data-table-demo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item);
  }

  rowDoubleClick(rowEvent) {
    // alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) {
    return item.NPI;
  }

  cellColor(car) {
    return '#fafafa';
  }

  buttonalert(param: any) {
    alert(param);
  }

}
`.trim();  
  constructor() {
  }


  ngOnInit(): void {
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item);
  }

  rowDoubleClick(rowEvent) {
    // alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) {
    return item.NPI;
  }

  cellColor(car) {
    return '#fafafa';
  }

  buttonalert(param: any) {
    alert(param);
  }

}
