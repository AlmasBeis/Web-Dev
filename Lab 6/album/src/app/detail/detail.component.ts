import {Component, OnInit} from '@angular/core';
import {Album} from "../album";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  album: Album;
  originalTitle: string;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
    this.album = {} as Album;
    this.loaded = true;
    this.originalTitle = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
        this.originalTitle = album.title;
      });
    })
  }
  updateTitle(newTitle: string) {
    this.album.title = newTitle;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      this.album = album;
    });
  }
  revertTitle() {
    this.album.title = this.originalTitle;
  }
}
