import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OPTIONS } from 'src/app/shared/db/options.db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options = OPTIONS;

  category?= '';
  myControl = new FormControl();
  option: string[] = ['options'];

  constructor() { }

  ngOnInit(): void {
    this.category = 'options';
  }
}
