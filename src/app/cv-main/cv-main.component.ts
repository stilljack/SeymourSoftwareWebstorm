import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:no-unused-expression
import * as data from '../cv-main/sample.json';

@Component({
  selector: 'app-cv-main',
  templateUrl: './cv-main.component.html',
  styleUrls: ['./cv-main.component.css']
})


export class CvMainComponent implements OnInit {
  blogs: Array<Blogs> = (data as any).default;


  constructor() {
    console.log('Reading local json files');
    console.log(this.blogs);
  }

  ngOnInit(): void {
  }

}
interface Blogs {
  title: string;
  date: number;
  content: Array<string>;
}
