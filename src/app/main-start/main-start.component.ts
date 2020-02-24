import { Component, OnInit } from '@angular/core';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-main-start',
  templateUrl: './main-start.component.html',
  styleUrls: ['./main-start.component.css']
})
export class MainStartComponent implements OnInit {
  constructor( shareService: ShareService) {
  this.title = shareService.title;
  }
  title = '';
  ngOnInit(): void {
  }

}
