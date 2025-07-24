import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchQuery = signal('');

  searchChange = output<string>();

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
    this.searchChange.emit(target.value);
  }

  clearSearch(): void {
    this.searchQuery.set('');
    this.searchChange.emit('');
  }
}
