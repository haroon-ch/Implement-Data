import { Component, OnInit } from '@angular/core';
import {
  ViewChild,
} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage implements OnInit {
  
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3') slideWithNav3: Swiper;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3,
  };

  constructor() {
    //Item object for Nature
    this.sliderOne = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995,
        },
        {
          id: 925,
        },
        {
          id: 940,
        },
        {
          id: 943,
        },
        {
          id: 944,
        },
      ],
    };
    //Item object for Food
    this.sliderTwo = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324,
        },
        {
          id: 321,
        },
        {
          id: 435,
        },
        {
          id: 524,
        },
        {
          id: 235,
        },
      ],
    };
    //Item object for Fashion
    this.sliderThree = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 643,
        },
        {
          id: 532,
        },
        {
          id: 232,
        },
        {
          id: 874,
        },
        {
          id: 193,
        },
      ],
    };
  }

  ngOnInit() {
    
  }

  //Move to Next slide
  slideNext(slideView) {
    slideView.swiperRef.slideNext(500);
  }

  //Move to previous slide
  slidePrev(slideView) {
    slideView.swiperRef.slidePrev(500);
  }

  //Method called when slide is changed by drag or navigation
  slideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    object.isBeginningSlide = slideView?.swiperRef?.isBeginning;
    console.log('object.isBeginningSlide', object);
  }
  checkisEnd(object, slideView) {
    object.isEndSlide = slideView?.swiperRef?.isEnd;
    console.log('object.isEndSlide', object);
  }

  onSwiper(event) {
    // console.log(event);
  }
  onSlideChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
}
