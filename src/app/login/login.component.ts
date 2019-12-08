import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { DbserviceService } from '../mainmenu/dataservice/dbservice.service';
import { interval } from 'rxjs';
import { LoginModalComponent } from './loginmodal.component';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: []
})

export class LoginComponent implements OnInit, AfterViewInit {
    public rowData: any = [];
    public gridOptions: GridOptions;

    columnDefs = [
        { headerName: 'title', field: 'title', sortable: true, filter: true },
        { headerName: 'url', field: 'url', sortable: true, filter: true },
        { headerName: 'created_at', field: 'created_at', sortable: true, filter: true },
        { headerName: 'author', field: 'author', sortable: true, filter: true }
    ];
    
    constructor(public _dbJsonService: DbserviceService, public dialog: MatDialog
        ) { }

    ngAfterViewInit() {
        window.history.forward();
    }
    ngOnInit() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.paginationPageSize = 12;
        this.gridOptions.rowHeight = 30;
        this.gridOptions.pagination = true;
        this.gridOptions.enableSorting = true;

        interval(3000).subscribe(x => {
            this.loadTransactions()
        });
    }
    DataToShow: any;
    loadTransactions() {
        return this._dbJsonService.getTransactionAPI()
            .subscribe(data => {
                this.rowData = data.hits;
                this.DataToShow = JSON.stringify(data);
            });
    }
    dataToFilter: any;
    onRowClicked(data: any): void {
        this.dataToFilter = this.filterData(data.data.title);
        data = JSON.stringify(this.dataToFilter);
        this.dialog.open(LoginModalComponent, { height: '330px', width: '520px', data });
    }

    filterData(filter) {
        return this.rowData.filter(object => {
            return object['title'] == filter;
        });
    }
}

