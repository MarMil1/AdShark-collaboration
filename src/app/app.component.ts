import { Component, ViewEncapsulation, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  title = 'AdShark';

  constructor() {}

  ngOnInit() {
    (function ($) {
      $(document).ready(function() {

        $('.as-split-gutter-icon').mousedown(function () {
          // console.log('while dragging...');
          $('iframe').css('pointer-events', 'none');
        });

        $('.as-split-gutter-icon').mouseup(function () {
          // console.log('stopped dragging...');
          $('iframe').css('pointer-events', 'auto');
        });
      });
    })(jQuery);
  }


}
