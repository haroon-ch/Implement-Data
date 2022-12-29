import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-less',
  templateUrl: './show-less.page.html',
  styleUrls: ['./show-less.page.scss'],
})
export class ShowLessPage implements OnInit {

 public announcement:any = [{ text:'uioiewoiewwwwwwwwwwwwwwwwwwwwskjskjsdkjskjdskj' },{ text:'uioiewoiewwwwwwwwwwwwwwwwwwwwskjskjsdkjskjdskj' }];

  constructor(
  ) {
   }

  ngOnInit() {
  }

  trimString(string, length) {
    return string.length > length ? 
           string.substring(0, length) + '...' :
           string;
}

}
