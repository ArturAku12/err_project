import {
  Component,
  inject,
  signal,
  input,
  OnInit,
} from '@angular/core';
import { ConnectionService } from '../services/connection-service';
import { SectionFilterPipe } from '../pipes/section-filter-pipe';
import { SearchFilterPipe } from '../pipes/search-pipe';
import { Row } from '../components/row/row';
import { LoadSpinner } from '../components/load-spinner/load-spinner';
import { Section } from '../types/api.types';

@Component({
  selector: 'app-home',
  imports: [SectionFilterPipe, SearchFilterPipe, Row, LoadSpinner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  connectionService = inject(ConnectionService);
  isLoading = signal(true);
  error = signal<string | null>(null);
  sections = signal<Section[]>([]);

  searchQuery = input<string>('');

  ngOnInit() {
    this.connectionService.getData().subscribe({
      next: (data) => {
        const sectionsData = data.data.category.frontPage || [];
        this.sections.set(sectionsData);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.error.set('Failed to load data. Try again later.');
        this.isLoading.set(false);
        console.error('Error fetching data:', error);
      },
    });
  }
}
