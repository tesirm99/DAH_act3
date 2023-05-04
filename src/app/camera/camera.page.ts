import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GeolocationService } from '../geolocation.service';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  photo: SafeResourceUrl | undefined; 
  latitude: number | undefined;  
  longitude: number | undefined;
  accuracy: number | undefined;

  constructor(private sanitizer: DomSanitizer, private geolocationService: GeolocationService) {} 

  ngOnInit() {}

  async takePicture() { 
    const image = await Camera.getPhoto({ 
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    if(image && image.webPath)  {
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath); 
    }

    const position = await this.geolocationService.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.accuracy = position.coords.accuracy;

  }

}
