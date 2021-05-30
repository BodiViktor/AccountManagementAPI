import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  form: FormGroup = new FormGroup({
    accountType: new FormControl(''),
    creditLimit: new FormControl(''),
    description: new FormControl(''),
    href: new FormControl(''),
    lastModified: new FormControl(''),
    name: new FormControl(''),
    paymentStatus: new FormControl(''),
    state: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<CreateAccountComponent>) { }

  ngOnInit(): void {
  }

}
