import { Component, Input, OnInit } from '@angular/core';
import { Options } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() options?: Options;

  constructor() { }
  ngOnInit(): void {
  }
}
