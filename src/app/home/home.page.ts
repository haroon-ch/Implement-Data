import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public route:Router,private metaTagService: Meta) {}

  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Angular SEO Integration, Music CRUD, Angular Universal',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }

  ionic(){
    this.route.navigate(['ionic']);
  }
  contact(){
    this.route.navigate(['contact-us']);
  }
  javascript(){
    this.route.navigate(['javascript']);
  }
  firebase(){
    this.route.navigate(['firebase']);
  }
  html(){
    this.route.navigate(['html']);
  }
  bootstrap(){
    this.route.navigate(['bootstrap']);
  }
  animation(){
    this.route.navigate(['animation']);
  }
  blog(){
    this.route.navigate(['blog']);
  }
  angular(){
    this.route.navigate(['angular']);
  }
  //data
  camera(){
    this.route.navigate(['camera']);
  }

}
