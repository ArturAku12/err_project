import { Show } from './show.types';

export interface ApiResponse {
  data: CategoryData;
  apiVersion: string;
}

export interface CategoryData {
  category: {
    frontPage: Section[];
  };
}

export interface Section {
  header: string;
  data: Show[];
  highTimeline: boolean;
}
