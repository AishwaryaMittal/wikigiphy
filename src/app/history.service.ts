import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  searchHistory: any[] = [];

  constructor() { }

  getSearchHistory(): any[] {
    return this.searchHistory;
  }

  saveCurrentSearch(searchText: string) {
    let searchObject = {
      searchText: searchText,
      timestamp: new Date()
    };
    this.searchHistory.push(searchObject);
  }
}
