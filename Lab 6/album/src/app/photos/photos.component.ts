import {Component, OnInit} from '@angular/core';
import {Photo} from "../photo";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[];
  loaded: boolean;

  constructor(private route: ActivatedRoute, private photoService: AlbumsService) {
    this.photos = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.photoService.getPhotos(id).subscribe((photos: Photo[]) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }

  returnBack(){
    window.history.back();
  }
}
