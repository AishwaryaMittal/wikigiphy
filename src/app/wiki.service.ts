import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WikiService {

  wikiUrl: string = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*';
  limitUrl: string = '&srlimit=';
  searchTextUrl: string = '&srsearch=';

  constructor(private http: HttpClient) { }

  searchWikipedia(searchText: string, numWikiResults: number): Observable<any> {
    let url = `${this.wikiUrl}${this.limitUrl}${numWikiResults}${this.searchTextUrl}${searchText}`;
    // let url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=cat';
    console.log(url);
    return this.http.get(url).pipe(
      map(response => response['query'].search.map(res => res['title']))
    )
  }
}