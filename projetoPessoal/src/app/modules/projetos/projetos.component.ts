import { Component, OnInit, NgZone } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  albums: any[] = []; // Initialize the albums array

  constructor(private ngZone: NgZone, private lightbox: Lightbox) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      // Create your album with images
      this.albums = [
        {
          src: '/assets/images/projetos/docasGrupoPenta/01.png',
          caption: 'Image 1',
          thumb: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg'
        },
        {
          src: '/assets/images/projetos/docasGrupoPenta/02.jpeg',
          caption: 'Image 2',
          thumb: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg'
        },
        {
          src: '/assets/images/projetos/docasGrupoPenta/03.jpeg',
          caption: 'Image 2',
          thumb: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg'
        },
        {
          src: '/assets/images/projetos/docasGrupoPenta/04.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },
        {
          src: '/assets/images/projetos/docasGrupoPenta/05.png',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/06.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/07.png',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/08.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/09.png',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/12.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/13.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/14.png',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/15.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/16.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/17.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/18.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/19.jpeg',
          caption: 'Image 2',
          thumb: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
        }



      ];
    });
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.albums, index);
  }


}
