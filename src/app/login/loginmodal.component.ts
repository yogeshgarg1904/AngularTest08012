import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-loginModal',
    templateUrl: './loginmodal.component.html'
})

export class LoginModalComponent implements OnInit {

    myData: any;
    constructor(private dialogRef: MatDialogRef<LoginModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
        ) {
    }
    ngOnInit() {
        this.myData = this.data;
    }
    public goHome() {
        this.dialogRef.close();
    }
}

