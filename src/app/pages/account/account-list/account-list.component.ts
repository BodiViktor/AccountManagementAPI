import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Account } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  @Input() account?: Account;

  constructor(private service: FirebaseService) { }

  ngOnInit(): void {
  }

  delete(index: string): void {
    this.service.delete('account', index);
  }

  update(index: string): void {
    this.service.update('account', index, this.service.get);
  }
}
