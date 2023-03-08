import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "./album";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) {
  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  getPhotos(id: number): Observable<any> {
    return this.client.get(`${this.BASE_URL}/albums/${id}/photos`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }
}
