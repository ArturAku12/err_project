export interface Show {
  id: string;
  heading: string;
  verticalPhotos?: Photo[];
}

export interface Photo {
  photoUrlBase?: string;
  photoTypes?: PhotoTypes;
}

export interface PhotoTypes {
  [key: string]: {
    url: string;
  };
}
