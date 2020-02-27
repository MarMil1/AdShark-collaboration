export class AppCss {
  public css: string;
  public script: string;

  getGlobalCSS() {
    this.css =
      `<style >
        .body .c-search__suggestions.ui-menu-item {display:none!important;}
        .searchSpellingSuggestionPrompt {display:none;}
        .c-hero.c-hero--one_third.onethirdcol img { height: auto;}
        button.c-header__search-btn {background-color: transparent;}
        .prop65icon[data-toggle=tooltip]:after {display:none}
        span.prop65icon[data-toggle=tooltip] {    display: inline;}
        span.prop65icon[data-toggle=tooltip]:after {display:none;}
        .loggedinuser .flyout,  .asm_mode .flyout {display:none;}
        .asm_mode .sub-navigation-list .subNav__content {display:none;}
        .loggedinuser .sub-navigation-list .subNav__content, .americanfuneral .sub-navigation-list .subNav__content, .americanhealthcare .sub-navigation-list .subNav__content,
        .americaneducation .sub-navigation-list .subNav__content, .canadianhotel .sub-navigation-list .subNav__content  {display:none;}
        .flyout{ 	cursor: auto; 	}
        .flyout a {padding-left:0!important}
        .flyout.col-md-4{ 	padding: 0 !important; }
        .flyout p{ 	color: #000000; font-family: proxima-nova,sans-serif; 	font-size: 14px !important;
          line-height: 18px; 	font-weight: 500; 	} .flyout p:hover{ 	color: #005da3 !important; }
        .flyout a:hover{ 	background-color: transparent !important; 	}
        .flyout .flyoutheader {      color: #ffffff;     font-size: 28px;     font-family: proxima-nova,sans-serif;     font-weight: 800;  }
        .flyout .flyoutsubheader {      font-weight: 600;     line-height: 20px;     font-size: 14px;     margin-top: 5px !important;  }
        .flyoutdiv.c-hero{ 		width: 315px; 	} .flyout div.c-hero img{ 	width: 100%; } 	.flyout	.featurebrand {font-size:18px;}
        @media (max-width: 768px) { .flyout{     display: none; } }
        .canadianhotel a[title~=Clearance] { display:none; }
        img.bg-white-transparent {
          background-color: rgba(255,255,255,0.9);
          padding: 10px;
        }
        .cta-after::after {
          content: "\\0020\\003E";
      }
      </style>`;

    return this.css;
  }

  getA1CSS() {
    this.css =
      `<style type="text/css">
      .a1-hero .a1-supplier-logo img {
        position: absolute;
        top: 20px;
        right: 0;
      }

      .a1-hero .a1-supplier-logo img.bg-white {
        background-color: rgba(255, 255, 255, 0.9) !important;
        padding: 15px 25px;
      }

      .a1-hero .a1-hero_primary {
        background-color: #FFF;
      }

      .a1-hero .a1-hero_text-wrap {
        min-height: 200px;
      }

      .a1-hero .col-lg-8,
      .a1-hero .col-md-12 {
        padding-left: 0;
        padding-right: 0;
      }

      .a1-hero .c-hero__copy {
        max-width: 87%;
      }

      .a1-hero .callout {
        text-transform: uppercase;
        font-size: 16px;
        line-height: 22px;
      }

      .a1-hero_primary .callout {
        margin-bottom: 15px;
      }
  .a1-hero_primary .callout.sale {
    color: #eC1a3a;
  }
  .a1-hero_secondary .callout, .a1-hero_secondary .callout.sale {
    color: #ffffff;
  }
      .a1-hero_primary p.sub-headline,
      .a1-hero_primary h2.headline,
      .a1-hero_primary a.hero-link:hover span {
        color: #000;
      }

      .a1-hero_secondary p.sub-headline,
      .a1-hero_secondary h2.headline,
      .a1-hero_secondary a.hero-link:hover span {
        color: #FFF;
      }

      .a1-hero_primary a:hover span.cta,
      .a1-hero_secondary a:hover span.cta {
        text-decoration: underline;
      }

      .a1-hero_primary a span.cta,
      .a1-hero_secondary a span.cta {
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
      }

      .a1-hero_primary a span.cta {
        color: #000;
      }

      .a1-hero_secondary a span.cta {
        color: #FFF;
      }

      .a1-hero h2.headline {
        font-size: 35px;
        line-height: 38px;
        font-weight: 900;
      }

      .a1-hero p.sub-headline {
        font-size: 18px;
        line-height: 25px;
        font-weight: 400;
        margin-bottom: 0;
        padding-bottom: 16px;
        margin-top: 10px;
      }

      .a1-supplier-logo img.small {
        width: 100px;
      }

      .a1-supplier-logo img.medium {
        width: 150px;
      }

      .a1-supplier-logo img.large {
        width: 200px;
      }
      .c-hero.a1-hero_image {
          height: 410px;
      }
      /********* QUERIES ********/
      @media (max-width: 1370px) {
        .a1-hero .c-hero__copy {
          max-width: 96%;
        }

        .a1-hero h2.headline {
          font-size: 34px;
          line-height: 37px;
        }
      }

      @media (max-width: 1200px) {
        .a1-hero p.sub-headline {
          font-size: 16px;
          line-height: 22px;
        }
      }

      @media (max-width: 1090px) {
        .a1-hero .c-hero__copy {
          max-width: 80%;
        }

        .a1-hero .callout {
          font-size: 15px;
        }

        .a1-hero h2.headline {
          font-size: 32px;
          line-height: 35px;
        }

        .a1-hero p.sub-headline {
          font-size: 15px;
          line-height: 21px;
        }

        .a1-hero a span.cta {
          font-size: 15px;
        }
      }

      @media (max-width: 1024.98px) {
        .a1-hero p.sub-headline {
          margin-top: 5px;
        }

        .a1-hero_primary .callout.sale {
          margin-bottom: 8px;
        }
      }


      @media only screen and (max-width: 600px) {
        .a1-hero .c-hero__copy {
          max-width: 92%;
        }

        .a1-hero h2.headline {
          font-size: 26px;
          line-height: 30px;
        }

        .a1-hero p.sub-headline {
          padding-bottom: 8px;
        }

        .a1-supplier-logo img.small {
          width: 60px;
        }

        .a1-supplier-logo img.medium {
          width: 80px;
        }

        .a1-supplier-logo img.large {
          width: 100px;
        }

        .a1-hero .a1-supplier-logo img.bg-white {
          padding: 10px;
        }

        .c-hero.a1-hero_image {
          height: 205px;
        }

        .a1-hero .a1-hero_text-wrap {
          min-height: 230px;
        }
      }
      </style>`;

    return this.css;
  }

  getC1CSS() {
    this.css =
      `<style type="text/css">
      .c1-hero .c1-supplier-logo img { position: absolute; top: 20px; right: 0; } .c1-hero .c1-supplier-logo
      img.bg-white { background-color: rgba(255, 255, 255, 0.9) !important; padding: 15px 25px; } .c1-hero
      .c1-hero_primary { background-color: #FFF; } .c1-hero .c1-hero_text-wrap { min-height: 200px; } .c1-hero
      .col-lg-8, .c1-hero .col-md-12 { padding-left: 0; padding-right: 0; } .c1-hero .c-hero__copy { max-width: 86%; }
      .c1-hero .callout { text-transform: uppercase; font-size: 16px; line-height: 22px; } .c1-hero_primary .callout {
      margin-bottom: 15px; } .c1-hero_primary .callout.sale { color: #eC1a3a; } .c1-hero_primary p.sub-headline,
      .c1-hero_primary h2.headline, .c1-hero_primary a.hero-link:hover span { color: #000; } .c1-hero_secondary
      p.sub-headline, .c1-hero_secondary h2.headline, .c1-hero_secondary a.hero-link:hover span { color: #FFF; }
      .c1-hero_primary a:hover span.cta, .c1-hero_secondary a:hover span.cta { text-decoration: underline; }
      .c1-hero_secondary .callout, .c1-hero_secondary .callout.sale {
        Color: #ffffff;
      }
      .c1-hero_primary a span.cta, .c1-hero_secondary a span.cta { text-decoration: none; font-size: 16px;
      font-weight: 600; } .c1-hero_primary a span.cta { color: #000; } .c1-hero_secondary a span.cta { color: #FFF; }
      .c1-hero h2.headline { font-size: 35px; line-height: 38px; font-weight: 900; } .c1-hero p.sub-headline {
      font-size: 18px; line-height: 25px; font-weight: 400; margin-bottom: 0; padding-bottom: 16px; margin-top: 10px;
      } .c1-supplier-logo img.small { width: 100px; } .c1-supplier-logo img.medium { width: 150px; } .c1-supplier-logo
      img.large { width: 200px; } .c-hero.c1-hero_image { height: 410px; } /********* QUERIES ********/ @media
      (max-width: 1370px) { .c1-hero .c-hero__copy { max-width: 96%; } .c1-hero h2.headline { font-size: 34px;
      line-height: 37px; } } @media (max-width: 1200px) { .c1-hero p.sub-headline { font-size: 16px; line-height:
      22px; } } @media (max-width: 1090px) { .c1-hero .c-hero__copy { max-width: 80%; } .c1-hero .callout { font-size:
      15px; } .c1-hero h2.headline { font-size: 32px; line-height: 35px; } .c1-hero p.sub-headline { font-size: 15px;
      line-height: 21px; } .c1-hero a span.cta { font-size: 15px; } } @media (max-width: 1024.98px) { .c1-hero
      p.sub-headline { margin-top: 5px; } .c1-hero_primary .callout.sale { margin-bottom: 8px; } } @media only screen
      and (max-width: 600px) { .c1-hero .c-hero__copy { max-width: 92%; } .c1-hero h2.headline { font-size: 26px;
      line-height: 30px; } .c1-hero p.sub-headline { padding-bottom: 8px; } .c1-supplier-logo img.small { width: 60px;
      } .c1-supplier-logo img.medium { width: 80px; } .c1-supplier-logo img.large { width: 100px; } .c1-hero
      .c1-supplier-logo img.bg-white { padding: 10px; } .c-hero.c1-hero_image { height: 205px; } .c1-hero
      .c1-hero_text-wrap { min-height: 230px; } }
      </style>`;

    return this.css;
  }
  getC1ClippedCSS() {
    this.css =
      `<style type="text/css">
      #clp-product-ad {   margin-bottom: 20px; } #clp-product-ad .row {   max-width: 1408px;   height: auto;   min-height: 410px;   margin: 0 auto;   background-color: #ffffff;   padding: 0px 80px; }  #clp-product-ad h3 {   color: #000000;   font-size: 46px;   line-height: 46px; }  #clp-product-ad h4 {   color: #ec1a3a; }  #clp-product-ad p {   font-size: 18px;   line-height: initial;   max-width: 75%; } #clp-product-ad p.xsmall {     font-size: 13px;     line-height: 15px; }  #clp-product-ad .logo {   max-width: 160px; } #clp-product-ad div.right img { max-height: 450px; }/**  * Queries */@media (max-width: 1200px) {   #clp-product-ad .logo {   }    #clp-product-ad h3 {     color: #000000;     font-size: 38px;     line-height: 38px;   }  #clp-product-ad p {     max-width: 75%;   } }  @media (max-width: 1024px) {   #clp-product-ad .btn {     margin-bottom: 10px;   }  #clp-product-ad p {      max-width: 95%;       font-size: 16px;   } }  @media (max-width: 992px) {   #clp-product-ad h3 {     color: #000000;     font-size: 32px;     line-height: 32px;   }    #clp-product-ad .right img {     max-width: 50%;   }    #clp-product-ad p {     max-width: 90%;   } }  @media (max-width: 768px) {  /*#clp-product-ad .logo { 		max-width: 100px; 	}*/    #clp-product-ad h3 {     color: #000000;     font-size: 30px;     line-height: 30px;   }    #clp-product-ad p {     font-size: 16px;     line-height: initial;   }    #clp-product-ad .right img {     max-width: 75%;   }    #clp-product-ad .row {     padding: 7%;   } }
      </style>`;

    return this.css;
  }

  getSeasonalCSS() {
    this.css =
    `<style type="text/css">
    .seasonalComponent-block {
      display: flex;
      flex-wrap: nowrap;
      margin: 20px auto;
  }
  .seasonalComponent-block a.seasonalComponent-item {
      background: #fff;
      border: 2px solid transparent;
      border-radius: 4px;
      display: block;
      min-height: 250px;
      padding: 21px;
      text-align: center;
      text-decoration: none;
      width: 180px;
      margin: 12px auto;
      color: #005da4;
      font-weight: 600;
      line-height: 1.2;
  }
  .seasonalComponent-block a.seasonalComponent-item:hover {
      border-color: #005da3;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
  }
  .seasonalComponent-callout-inner p {
      font-size: 16px;
      line-height: 1.4;
  }
  .seasonalComponent-block div.seasonalComponent-callout {
      background-color: #004c86;
      background-image: -webkit-linear-gradient(-35deg, #013A6B 50%, #005da3 50%);
      background-image: linear-gradient(-60deg, #013A6B 50%, #005da3 50%);
      width: 330px;
      height: 275px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .seasonalComponent-block a.seasonalComponent-item span {
      width: 100%;
      text-align: center;
      margin: 0 0 15px 0;
  }
  .seasonalComponent-callout-inner {
      max-width: 90%;
  }
  .seasonalComponent-callout-inner img {
      max-width: 180px;
      display: block;
  }
  a.seasonalComponent-item img {
      padding-bottom: 15px;
      display: block;
      margin: 0 auto;
  }
  /* Media Queries */ /* desktop breakpoint */

  @media (max-width: 1200px) {
  .seasonalComponent-block {
      flex-wrap: wrap;
  }
  .seasonalComponent-block div.seasonalComponent-callout {
      width: 100%;
  }

  } /* tablet breakpoint */

  @media (max-width: 992px) {
  }       /* mobile breakpoint */

  @media (max-width: 768px) {
      .seasonalComponent-block a.seasonalComponent-item {
          width: 250px;
      }
  } /* xs mobile breakpoint */

  @media (max-width: 576px) {
       .seasonalComponent-block a.seasonalComponent-item {
          width: 180px;
      }
  } /* // Media Queries */

    </style>`;
    return this.css;
  }

  getFeaturedBrandsCSS() {
    this.css =
    `  <style type="text/css">
    #featuredbrand .shopByBrand-block {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 20px auto;
    }

    #featuredbrand .shopByBrand-block a.shopByBrand-item {
      background: #fff;
      border: 2px solid transparent;
      border-radius: 4px;
      display: block;
      height: 150px;
      padding: 21px;
      text-decoration: none;
      width: 19%;
      margin: 20px auto;
      color: #005da4;
      font-weight: 600;
      line-height: 1.2;
      position: relative;
    }

    #featuredbrand .shopByBrand-block a.shopByBrand-item:hover {
      border-color: #005da4;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
    }

    #featuredbrand .shopByBrand-block a.shopByBrand-item img {
      display: block;
      margin: 0 auto;
      margin-bottom: 0px !important;
      max-height: 125px;
      padding: 15px 0px;
      max-width: 120px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    #featuredbrand .shopByBrand-block a.shopByBrand-item span {
      position: absolute;
      width: 100%;
      margin: 0 0 15px 0;
      padding: 0;
      bottom: 0;
      left: 0;
    }

    @media (max-width: 968px) {
      #featuredbrand .shopByBrand-block a.shopByBrand-item img {
        max-width: 100px;
      }
    }

    /* mobile breakpoint */

    @media (max-width: 768px) {
      #featuredbrand .shopByBrand-block a.shopByBrand-item {
        margin: 20px 10px;
      }

      #featuredbrand .shopByBrand-block {
        display: block;
      }

      #featuredbrand .slick-initialized {
        height: 100%;
        width: 100% !important;
      }

      #featuredbrand .slick-track {
        /* width: 100% !important; */
      }

      #featuredbrand .shopByBrand-block a.shopByBrand-item img {
        display: block;
        margin: 0 auto;
        margin-bottom: 0px !important;
        max-height: 100x;
        padding: 15px 0px;
        max-width: 375px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        max-width: 250px;
      }

      #featuredbrand .shopByBrand-block a.shopByBrand-item {}

      #featuredbrand .shopByBrand-block {
        margin: inherit;
      }
    }

    @media (max-width: 470px) {
      #featuredbrand .shopByBrand-block a.shopByBrand-item img {
        width: 140px;
      }
    }
   </style>`;
    return this.css;
  }

  getFeaturedBrandsScript() {
    this.script =
    `<script>
    document.addEventListener('DOMContentLoaded', function(event) {
      $(document).ready(function() {
        (function initShopByBrandSlider() {
          //brands slider init fired
          var $brandsSlider = $('.shopByBrand-block');
          var $div = $('<div>');

          if ($brandsSlider.length < 1) return;

          var $brandsSliderParent = $brandsSlider.parent();
          var $brandsSliderCopy = $brandsSlider.detach();
          var $carouselItems = $brandsSliderCopy.find('.shopByBrand-item');

          $brandsSliderParent.append($div.append($brandsSliderCopy));

          Respond.to({
            'media': 'screen and (max-width: 768px)',
            'namespace': 'responsive_brandsSlider',
            'fallback': 'else',
            'if': function() {
              $brandsSliderCopy.addClass('c-carousel__carousel c-carousel__carousel_brandsSlider').parent('div').addClass('c-carousel__container c-carousel__container_brandsSlider');
              $carouselItems.addClass('c-carousel__item c-carousel__item_brandsSlider');

              $brandsSliderCopy.slick({
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                focusOnSelect: false,
                centerMode: false,
                draggable: true
              });
            },
            'else': function() {
              if ($brandsSliderCopy.hasClass('c-carousel__carousel c-carousel__carousel_brandsSlider')) {
                $brandsSliderCopy.removeClass('c-carousel__carousel c-carousel__carousel_brandsSlider').parent('div').removeClass('c-carousel__container c-carousel__container_brandsSlider');
                $carouselItems.removeClass('c-carousel__item c-carousel__item_brandsSlider');
                $brandsSliderCopy.slick('unslick');
              }
            }
          });
        }());

      });
    });
    </script>`;
    return this.script;
  }

}
