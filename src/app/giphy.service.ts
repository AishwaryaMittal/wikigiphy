import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=';
  giphyCode = 'POIdbFm2h7zwQBXrQsoY3u14wP3x5Qj6';
  searchUrl = '&q=';
  limitUrl = '&limit=';
  endUrl = '&offset=0&rating=G&lang=en';

  constructor(private http: HttpClient) { }

  searchGiphy(searchText: string, numGiphyResults: number): Observable<any> {
    let url = `${this.giphyUrl}${this.giphyCode}${this.searchUrl}${searchText}${this.limitUrl}${numGiphyResults}${this.endUrl}`;
    return this.http.get(url).pipe(
      map(response => response['data'].map(res => res['images']['original']['url']))
    );
  }
}
