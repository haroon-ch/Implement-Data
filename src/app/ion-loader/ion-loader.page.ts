import { Component, OnInit } from '@angular/core';
import { IonLoaderService } from '../ion-loader.service';
@Component({
  selector: 'app-ion-loader',
  templateUrl: './ion-loader.page.html',
  styleUrls: ['./ion-loader.page.scss'],
})
export class IonLoaderPage implements OnInit {

  constructor(private ionLoaderService: IonLoaderService) { }
  displayAutoLoader() {
    this.ionLoaderService.autoLoader();
  }
  showLoader() {
    this.ionLoaderService.simpleLoader();
  }
  hideLoader() {
    this.ionLoaderService.dismissLoader();
  }
  customizeLoader() {
    this.ionLoaderService.customLoader();
  }
  ngOnInit() {
  }

}
