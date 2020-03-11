import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:no-unused-expression
// @ts-ignore
import * as data from '../blog-main/sample.json';
// @ts-ignore
import { Blogs } from 'global_types.js';
@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {
  blogs: Array<Blogs> = (data as any).default;
  constructor() {
    console.log('Reading local json files');
    console.log(this.blogs) ;
  }
  ngOnInit(): void {
  }

}
