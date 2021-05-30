import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CreateAccountComponent } from './create-account/create-account.component';
import { OPTIONS } from 'src/app/shared/db/options.db';
import { Account } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  options = OPTIONS;
  category?= '';
  account: Observable<Account[]> | null = null;
  page = 'account';
  accountRichest: Observable<Account[]> | null = null;
  form: FormGroup | null = null;

  constructor(private dialog: MatDialog, private service: FirebaseService) { }

  ngOnInit(): void {
    this.category = 'options';
    this.listAccounts();
    this.richest();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateAccountComponent, {});
    dialogRef.afterClosed().subscribe((account: Account) => {
      console.log(account);
      if (account?.name) {
        this.service.add('account', account);
      }
    }, err => {
      console.warn(err);
    });
  }

  listAccounts() {
    this.account = this.service.get('account');
  }

  richest() {
    this.accountRichest = this.service.getRichest('account');
  }
}
