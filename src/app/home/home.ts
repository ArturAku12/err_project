import { Component, inject } from '@angular/core';
import { ConnectionService } from '../services/connection-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  connectionService = inject(ConnectionService);

  ngOnInit() {
    this.connectionService.getData().subscribe((data) => {
      const receivedData = data;
      console.log(receivedData.data.category.frontPage);
    });
  }
}
