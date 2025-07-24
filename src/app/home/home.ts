import { Component, inject, signal } from '@angular/core';
import { ConnectionService } from '../services/connection-service';
import { SectionFilterPipe } from '../pipes/section-filter-pipe';
import { Row } from '../components/row/row';
import { LoadSpinner } from '../components/load-spinner/load-spinner';
import { Section } from '../types/api.types';

@Component({
  selector: 'app-home',
  imports: [SectionFilterPipe, Row, LoadSpinner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  connectionService = inject(ConnectionService);
  isLoading = signal(true);
  sections = signal<Section[]>([]);
  error = signal<string | null>(null);

  ngOnInit() {
    this.connectionService.getData().subscribe({
      next: (data) => {
        this.sections.set(data.data.category.frontPage || []);
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
