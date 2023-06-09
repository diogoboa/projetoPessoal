import { Component, OnInit, NgZone } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  album_docas_grupo_penta: any[] = [];

   albums_sispenta: any[] = [];

  constructor(private ngZone: NgZone, private lightbox: Lightbox) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      // Create your album with images
      this.album_docas_grupo_penta = [
        {
          src: '/assets/images/projetos/docasGrupoPenta/01.png',
          caption: '',
          thumb: ''
        },
        {
          src: '/assets/images/projetos/docasGrupoPenta/02.jpeg',
          caption: '',
          thumb: ''
        },
        {
          src: '/assets/images/projetos/docasGrupoPenta/03.jpeg',
          caption: '',
          thumb: ''
        },
        {
          src: '/assets/images/projetos/docasGrupoPenta/04.jpeg',
          caption: '',
          thumb: ''
        },
        {
          src: '/assets/images/projetos/docasGrupoPenta/05.png',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/06.jpeg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/07.png',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/08.jpeg',
          caption: 'Image 2',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/09.png',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/12.jpeg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/13.jpeg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/14.png',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/15.jpeg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/16.jpeg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/17.jpeg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/18.jpeg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/docasGrupoPenta/19.jpeg',
          caption: '',
          thumb: ''
        }



      ];


      this.albums_sispenta = [
        {
          src: '/assets/images/projetos/sisPenta/01.jpg',
          caption: '',
          thumb: ''
        },
        {
          src: '/assets/images/projetos/sisPenta/02.jpg',
          caption: '',
          thumb: ''
        },
        {
          src: '/assets/images/projetos/sisPenta/03.jpg',
          caption: '',
          thumb: ''
        },
        {
          src: '/assets/images/projetos/sisPenta/04.jpg',
          caption: '',
          thumb: ''
        },
        {
          src: '/assets/images/projetos/sisPenta/05.jpg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/sisPenta/07.jpg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/sisPenta/08.jpg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/sisPenta/09.jpg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/sisPenta/10.jpg',
          caption: '',
          thumb: ''
        },

        {
          src: '/assets/images/projetos/sisPenta/11.jpg',
          caption: '',
          thumb: ''
        },



      ];


    });
  }




}
