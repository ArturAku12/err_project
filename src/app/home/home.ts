import { Component, inject, signal } from '@angular/core';
import { ConnectionService } from '../services/connection-service';
import { SectionFilterPipe } from '../pipes/section-filter-pipe';
import { Row } from '../components/row/row';

@Component({
  selector: 'app-home',
  imports: [SectionFilterPipe, Row],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  connectionService = inject(ConnectionService);
  sections = signal<any[]>([]);
  ngOnInit() {
    this.connectionService.getData().subscribe((data) => {
      this.sections.set(data.data.category.frontPage || []);
      console.log('Sections:', this.sections());
    });
  }
}
