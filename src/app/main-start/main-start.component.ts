import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShareService} from '../share.service';
import {Title} from '@angular/platform-browser';
@ViewChild('canvas', { static: true })
@Component({
  selector: 'app-main-start',
  templateUrl: './main-start.component.html',
  styleUrls: ['./main-start.component.css']
})
export class MainStartComponent implements OnInit {
  constructor( shareService: ShareService, private titleService: Title) {
  this.nameOfComponent = shareService.title;
  this.setTitle(shareService.title);
  }
  nameOfComponent = '';
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  animate(): void {}
  ngOnInit(): void {
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
