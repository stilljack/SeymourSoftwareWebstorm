import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.css']
})
export class SharedHeaderComponent implements OnInit {
  today: number = Date.now();

constructor() {
}
  ngOnInit(): void {
  }

}
