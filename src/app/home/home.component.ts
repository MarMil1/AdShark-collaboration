import { Component, HostListener, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { MatTabChangeEvent, MatSnackBar } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { A1Data } from '../models/A1Data';
import { D1Data } from '../models/D1Data';
import { SeasonalData } from '../models/SeasonalData';
import { WorkfrontService } from '../services/workfront.service';
import { C1Data } from '../models/C1Data';
import { SaleCarouselData } from '../models/SaleCarouselData';
import { C1ClippedData } from '../models/C1ClippedData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
    d1Data: D1Data;
    a1Data: A1Data;
    seasonalData: SeasonalData;
    salecarouselData: SaleCarouselData;
    projectName = ''; loading = true;
    c1Data: C1Data;
    c1clippedData: C1ClippedData;
    device = ''; tabClick = 0; adType = 'One-Third Banner';
    altLogo = ''; altImg = '';
    paneSize: number; rightWidth: number; leftWidth: number; logoWidth: number;

  constructor(private workfrontService: WorkfrontService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(param => this.workfrontService.projID = param.get('id'));
    // console.log(this.workfrontService.projID);

    this.seasonalData = new SeasonalData();
    this.d1Data = new D1Data();
    this.a1Data = new A1Data();
    this.c1Data = new C1Data();
    this.c1clippedData = new C1ClippedData();
    this.salecarouselData = new SaleCarouselData();

    this.route.params.subscribe(param => {
      if (param.id) {
        this.workfrontService.getData().subscribe((res) => {
          this.projectName = res.data.name;
          if (res.data.parameterValues['DE:One-Third Banner']) {
            this.adType = res.data.parameterValues['DE:One-Third Banner'];
            this.d1Data = res;
            this.loading = false;
            this.tabClick = 0;
          } else if (res.data.parameterValues['DE:Sale Carousel']) {
            this.adType = res.data.parameterValues['DE:Sale Carousel'];
            this.salecarouselData = res;
            this.loading = false;
            this.tabClick = 4;
          } else if (res.data.parameterValues['DE:A1 Hero Banner']) {
            this.getAlterLogo(res.data.parameterValues['DE:Image path for logo']);
            this.adType = res.data.parameterValues['DE:A1 Hero Banner'];
            this.a1Data = res;
            this.loading = false;
            this.tabClick = 1;
          } else if (res.data.parameterValues['DE:CLP Banner']) {
            this.getAlterLogo(res.data.parameterValues['DE:Image path for logo']);
            this.adType = res.data.parameterValues['DE:CLP Banner'];
            this.c1Data = res;
            this.loading = false;
            this.tabClick = 3;
          }  else if (res.data.parameterValues['DE:CLP Banner Clipped']) {
            this.getAlterLogo(res.data.parameterValues['DE:Image path for logo']);
            this.adType = res.data.parameterValues['DE:CLP Banner'];
            this.c1clippedData = res;
            this.loading = false;
            this.tabClick = 5;
          } else if (res.data.parameterValues['DE:Seasonal Component']) {
            this.adType = res.data.parameterValues['DE:Seasonal Component'];
            this.seasonalData = res;
            this.loading = false;
            this.tabClick = 2;
          }
        });
      } else {
        this.loading = false;
      }
    });
  }

  ngDoCheck(): void {
    if (this.adType === 'A1 Hero Banner') {
      this.altLogo = this.a1Data.data.parameterValues['DE:Image path for logo'];
    } else if (this.adType === 'CLP Banner') {
      this.altLogo = this.c1Data.data.parameterValues['DE:Image path for logo'];
    } else if (this.adType === 'CLP Banner Clipped') {
      this.altLogo = this.c1clippedData.data.parameterValues['DE:Image path for logo'];
    }
    this.getAlterLogo(this.altLogo);
  }

  onSubmit() {
    this.loading = true;
    const res = confirm(`Update "${this.projectName}" project?`);
    if (res === true && this.a1Data.data.name === this.projectName) {
      this.workfrontService.updateData(this.a1Data.data)
      .subscribe(response => {
        this.loading = false;
        this.openSnackBar(response.toString(), 'x', 5000);
      }, err => {
        console.log('PUT call in error', err);
        this.openSnackBar('Error: cannot push to workfront', 'x', 5000);
      });
    } else if (res === true && this.d1Data.data.name === this.projectName) {
      this.workfrontService.updateData(this.d1Data.data)
      .subscribe(response => {
        this.loading = false;
        this.openSnackBar(response.toString(), 'x', 5000);
      }, err => {
        console.log('PUT call in error', err);
        this.openSnackBar('Error: cannot push to workfront', 'x', 5000);

      });
    } else if (res === true && this.salecarouselData.data.name === this.projectName) {
      this.workfrontService.updateData(this.salecarouselData.data)
      .subscribe(response => {
        this.loading = false;
        this.openSnackBar(response.toString(), 'x', 5000);
      }, err => {
        console.log('PUT call in error', err);
        this.openSnackBar('Error: cannot push to workfront', 'x', 5000);

      });
    } else if (res === true && this.c1Data.data.name === this.projectName) {
      this.workfrontService.updateData(this.c1Data.data)
      .subscribe(response => {
        this.loading = false;
        this.openSnackBar(response.toString(), 'x', 5000);
      }, err => {
        console.log('PUT call in error', err);
        this.openSnackBar('Error: cannot push to workfront', 'x', 5000);

      });
    } else if (res === true && this.c1clippedData.data.name === this.projectName) {
      this.workfrontService.updateData(this.c1clippedData.data)
      .subscribe(response => {
        this.loading = false;
        this.openSnackBar(response.toString(), 'x', 5000);
      }, err => {
        console.log('PUT call in error', err);
        this.openSnackBar('Error: cannot push to workfront', 'x', 5000);

      });
    } else if (res === true && this.seasonalData.data.name === this.projectName) {
      this.workfrontService.updateData(this.seasonalData.data)
      .subscribe(response => {
        this.loading = false;
        this.openSnackBar(response.toString(), 'x', 5000);
      }, err => {
        console.log('PUT call in error', err);
        this.openSnackBar('Error: cannot push to workfront', 'x', 5000);

      });
    } else {
      this.loading = false;
    }
  }

  openSnackBar(msg: string, action: string, time?: number) {
    this.snackBar.open(msg, action, { duration: time });
  }

  /* Listen when when typing */
  @HostListener('document:keyup', ['$event'])
  keyEvent(event) {
  }

  // receiveA1Logosize(size) {
  //   this.a1LogoSize = size;
  // }
  // receiveC1Logosize(size) {
  //   this.c1LogoSize = size;
  // }

  /* Check what tab is on */
  onTabClick(e: MatTabChangeEvent) {
    switch (e.index) {

      // D1 tab
      case 0:
        $('iframe').css('width', this.rightWidth);
        this.tabClick = e.index;
        this.adType = 'One-Third Banner';
        console.log(e.index);
        break;

      // A1 tab
      case 1:
        $('iframe').css('width', this.rightWidth);
        // $('.A1-iframe').css('height', 410);
        this.tabClick = e.index;
        this.adType = 'A1 Hero Banner';
        console.log(e.index);
        break;

      // Seasonal tab
      case 2:
        $('iframe').css('width', this.rightWidth);
      // $('.Seasonal-iframe').css('height', 410);
        this.tabClick = e.index;
        console.log(e.index);
        break;

         // C1 tab
      case 3:
        $('iframe').css('width', this.rightWidth);
        this.tabClick = e.index;
        this.adType = 'CLP Banner';
        console.log(e.index);
        break;


      // Sale Carousel tab
      case 4:
        this.tabClick = e.index;
        console.log(e.index);
        this.adType = 'Sale Carousel';
        break;

        // CLP Clipped Tab
          case 5:
            $('iframe').css('width', this.rightWidth);
            this.tabClick = e.index;
            this.adType = 'CLP Clipped Banner';
            console.log(e.index);
            break;

      default:
      }
    }

  /* Size right pane */
  onResizedRight(event: ResizedEvent) {
    this.rightWidth = event.newWidth;
    $('iframe').css('width', this.rightWidth);

    if (this.rightWidth <= 500) {
      this.device = 'Mobile';
      $('.btn-mobile').addClass('current');
      $('.btn-tablet,.btn-desktop,.btn-widescreen').removeClass('current');

    } else if (this.rightWidth <= 1024) {
      this.device = 'Tablet';
      $('.btn-tablet').addClass('current');
      $('.btn-mobile,.btn-desktop,.btn-widescreen').removeClass('current');

    } else if (this.rightWidth <= 1280) {
      this.device = 'Desktop';
      $('.btn-desktop').addClass('current');
      $('.btn-tablet,.btn-mobile,.btn-widescreen').removeClass('current');

    } else {
      this.device = 'Wide Screen';
      $('.btn-widescreen').addClass('current');
      $('.btn-tablet,.btn-desktop,.btn-mobile').removeClass('current');
    }


  }

  /* Size left pane */
  onResizedLeft(event: ResizedEvent) {
    this.leftWidth = event.newWidth;
  }

  /* Set size of pane each device */
  setPaneSize(event, device) {
    switch (device) {
      case 'mobile':
        this.paneSize = 475; // 500
        break;

      case 'tablet':
        event.preventDefault();
        this.paneSize = 750; // 700
        break;

      case 'desktop':
        event.preventDefault();
        this.paneSize = 1250; // 1150
        break;

      case 'widescreen':
        event.preventDefault();
        this.paneSize = 1550; // 1350
        break;

      default:
    }
  }
 

  /* Get an alternate logo name */
  getAlterLogo(logoPath: string) {
    let lst: string[] = [];
    let tmpList: string[] = [];
    let tmp = logoPath;
    tmp = tmp.toLowerCase();
    if (logoPath !== null) {
      lst = tmp.split('/');
      tmp = lst[lst.length - 1];
      const i = lst[lst.length - 1].indexOf('-logo');
      tmp = tmp.substring(0, i);
      tmpList = tmp.split('-');
      for (let i = 0; i < tmpList.length; i++) {
        tmpList[i] = tmpList[i].charAt(0).toUpperCase() + tmpList[i].slice(1);
      }

      this.altLogo = `${tmpList.join(' ')} Logo`;
    }
    if (logoPath.includes('Registry')) {
      this.altLogo = 'Registry';
    }
    // console.log('AltLogo: ', this.altLogo);
  }

  /* Get an alternate img name */
  getAlterImg(data) {
    let lst: string[] = [];
    let tmp = data.bgURL;
    if (data.bgURL !== null) {
      lst = tmp.split('/');
      tmp = lst[lst.length - 1];
      tmp = tmp.substring(0, tmp.search('.jpg'));
      this.altImg = tmp;
    }
  }

}
