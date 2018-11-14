import { Component, OnInit } from '@angular/core';

import { WikiService } from '../wiki.service';
import { HistoryService } from '../history.service';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchText: string = '';
  numWikiResults = 10;
  numGiphyResults = 5;

  wikiResults: string[];
  giphyResults: string[];

  constructor(
    private wikiService: WikiService, 
    private giphyService: GiphyService, 
    private historyService: HistoryService) 
    { 
    }

  ngOnInit() {
  }

  search() {
    if (this.searchText === '') {
      return;
    }
  
    // Wiki Search
    this.wikiService.searchWikipedia(this.searchText, this.numWikiResults).subscribe(
      (response) => {
        console.log('WIKIPEDIA SEARCH RESULTS:');
        console.log(response);
        this.wikiResults = response;
      },
      (error) => {
        console.log('ERROR SEARCHING WIKIPEDIA');
        console.log(error);
      }
    );

    // Giphy Search
    this.giphyService.searchGiphy(this.searchText, this.numGiphyResults).subscribe(
      (response) => {
        console.log('GIPHY SEARCH RESULTS:');
        console.log(response);
        this.giphyResults = response;
      },
      (error) => {
        console.log('ERROR SEARCHING GIPHY');
        console.log(error);
      }
    );

    // Save Search History
    this.historyService.saveCurrentSearch(this.searchText);
  }
}
