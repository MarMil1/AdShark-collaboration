import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { MatTabChangeEvent } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { A1Data } from '../models/A1Data';
import { D1Data } from '../models/D1Data';
import { SeasonalData } from '../models/SeasonalData';
import { WorkfrontService } from '../services/workfront.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    d1Data: D1Data;
    a1Data: A1Data;
    seasonalData: SeasonalData;
    projectName = ''; receviedData: any;
    device = ''; tabClick = 0;
    a1LogoSize = 'large'; altLogo = ''; altImg = '';
    paneSize: number; rightWidth: number; leftWidth: number; logoWidth: number;

  constructor(private workfrontService: WorkfrontService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(param => this.workfrontService.projID = param.get('id'));
    // console.log(this.workfrontService.projID);

    this.seasonalData = new SeasonalData();
    this.d1Data = new D1Data();
    this.a1Data = new A1Data();

    this.workfrontService.getData().subscribe((res) => {
      this.projectName = res.data.name;
      if (res.data.parameterValues['DE:Select Ad Type'] === 'A1 Hero Banner') {
        this.a1Data = res;
        this.receviedData = res;
      } else if (res.data.parameterValues['DE:Select Ad Type'] === '1/3 Banner') {
        this.d1Data = res;
        this.receviedData = res;
      }
    });
  }

  onSubmit() {
    const res = confirm('Are you sure you want to update "' + this.projectName + ' " project?');
    if (res === true && this.a1Data.data.name === this.projectName) {
      this.workfrontService.updateData(this.a1Data.data);
    } else if (res === true && this.d1Data.data.name === this.projectName) {
      this.workfrontService.updateData(this.d1Data.data);
    }
  }

  onClickClear() {
    this.d1Data = new D1Data();
    this.a1Data = new A1Data();
  }

  /* Listen when when typing */
  @HostListener('document:keyup', ['$event'])
  keyEvent(event) {}

  receiveA1Logosize(size) {
    this.a1LogoSize = size;
  }

  /* Check what tab is on */
  onTabClick(e: MatTabChangeEvent) {
    switch (e.index) {

      // D1 tab
      case 0:
        $('iframe').css('width', this.rightWidth);
        this.tabClick = e.index;
        console.log(e.index);
        break;

      // A1 tab
      case 1:
        $('iframe').css('width', this.rightWidth);
        // $('.A1-iframe').css('height', 410);
        this.setIframeHeight();
        this.tabClick = e.index;
        console.log(e.index);
        break;

      // Seasonal tab
      case 2:
        $('iframe').css('width', this.rightWidth);
      // $('.Seasonal-iframe').css('height', 410);
        this.setIframeHeight();
        this.tabClick = e.index;
        console.log(e.index);
        break;

      // Email tab
      case 3:
        $('iframe').css('width', this.rightWidth);
        // $('.email-iframe').css('height', 650);
        this.setIframeHeight();
        this.tabClick = e.index;
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

    this.setIframeHeight();

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
        this.paneSize = 1400; // 1350
        break;

      default:
    }
  }

  setIframeHeight() {
    if (this.rightWidth <= 500) {
      $('.D1-iframe').css('height', 500);
      $('.A1-iframe').css('height', 410);
      $('.email-iframe').css('height', 650);

    } else if (this.rightWidth <= 600) {
      $('.A1-iframe').css('height', 435);

    } else if (this.rightWidth <= 1024) {
      $('.D1-iframe').css('height', 500);
      $('.A1-iframe').css('height', 610);
      $('.email-iframe').css('height', 650);

    } else if (this.rightWidth <= 1280) {
      $('.D1-iframe').css('height', 500);
      $('.A1-iframe').css('height', 410);
      $('.email-iframe').css('height', 650);
      $('.Seasonal-iframe').css('height', 410);

    } else {
      $('.D1-iframe').css('height', 500);
      $('.A1-iframe').css('height', 410);
      $('.email-iframe').css('height', 650);
      $('.Seasonal-iframe').css('height', 410);
    }

    // for seasonal iframe height
    if (this.rightWidth <= 1200) {
      $('.Seasonal-iframe').css('height', 700);
    }
    if (this.rightWidth <= 768) {
      $('.Seasonal-iframe').css('height', 950);
    }

  }

  /* Get an alternate logo name */
  getAlterLogo(data) {
    let lst: string[] = [];
    let tmp = data.logoURL;
    if (data.logoURL !== null) {
      lst = tmp.split('/');
      tmp = lst[lst.length - 1];
      const i = lst[lst.length - 1].indexOf('-logo');
      tmp = tmp.substring(0, i);
      // console.log(tmp.slice(1));
      // console.log(tmp.replace('-', ' '));
      this.altLogo = tmp.charAt(0).toUpperCase() + tmp.slice(1);
      this.altLogo = this.altLogo.replace('-', ' ');
    }
    if (data.logoURL.includes('Registry')) {
      this.altLogo = 'Registry';
    }
    console.log('AltLogo: ', this.altLogo);
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
