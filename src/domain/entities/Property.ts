export interface IProperty {
  id: string;
  title: string;
  description: string;
  price_per_night: number;
  bathrooms : number;
  guests : number;
  country : string;
  country_code : string;
  category : string;
  favorited : string[];
  image_url : string;
  landlord : string
  created_at : Date;
}

export interface IPropertyview {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
}