export interface Display {
  de: string;
  fr: string;
  it: string;
  en: string;
}

export interface Properties {
  display: Display;
}

export interface Provider {
  name: string;
  properties: Properties;
}

export interface Subscriber {
  id: number;
}

export interface Source {
  provider: Provider;
  subscriber: Subscriber;
}

export interface RatingSummary {
  dimension: string;
  count: number;
  average: number;
  display: boolean;
}

export interface PlaceFeedbackSummary {
  recommendations: number;
  positive_recommendations: number;
  display_recommendations: boolean;
  ratings_count: number;
  feedbacks_count: number;
  reviews_count: number;
  average_rating: number;
  display_average_rating: boolean;
  rating_summaries: RatingSummary[];
  positive_recommendation_percentage: number;
}

export interface Contact {
  _class: string;
  contact_type: string;
  service_code: string;
  formatted_service_code: string;
  call_link: string;
  refuse_advertising: boolean;
  freecall_enabled: boolean;
  preferred: boolean;
  id: string;
  phone_number: string;
  url: string;
}

export interface Format2d {
  lng: number;
  lat: number;
}

export interface Location {
  lat: number;
  lon: number;
  x: number;
  y: number;
  latlon: string;
  format2d: Format2d;
  geohex: string;
}

export interface BoundingBox {
  lat1: number;
  lat2: number;
  lon1: number;
  lon2: number;
}

export interface Geography {
  location: Location;
  altitude: number;
  bounding_box: BoundingBox;
}

export interface Where {
  street: string;
  city: string;
  state: string;
  geography: Geography;
  house_number: string;
  zipcode: number;
}

export interface PlaceCollection {
  tags: string[];
  tag: string;
  id: string;
}

export interface BusinessDescription {
  de: string;
  it: string;
  fr: string;
  en: string;
}

export interface Identity {
  profession: string;
  name: string;
  business_description: BusinessDescription;
}

export interface Name {
  rm: string;
  it: string;
  fr: string;
  de: string;
  en: string;
}

export interface Renditions {
  icon: string;
}

export interface Icon {
  renditions: Renditions;
  alt: string;
  asset_id: string;
  url: string;
}

export interface Category {
  id: string;
  source_id: string;
  emoji: string;
  name: Name;
  icon: Icon;
  tags: string[];
}

export interface Business {
  identities: Identity[];
  categories: Category[];
}

export interface Address {
  _class: string;
  contacts: Contact[];
  address_id: string;
  address_types: string[];
  where: Where;
  place_collections: PlaceCollection[];
  business: Business;
}

export interface Day {
  start: string;
  end: string;
  type: 'OPEN' | 'CLOSED';
}

export interface Days {
  monday?: Day[];
  tuesday?: Day[];
  wednesday?: Day[];
  thursday?: Day[];
  friday?: Day[];
  saturday?: Day[];
  sunday?: Day[];
}

export interface OpeningHours {
  days: Days;
}

export interface PlaceInfoResponse {
  _class: string;
  language: string;
  entry_type: string;
  local_entry_id: string;
  source: Source;
  favorited: boolean;
  place_feedback_summary: PlaceFeedbackSummary;
  addresses: Address[];
  tags: string[];
  displayed_what: string;
  displayed_where: string;
  opening_hours: OpeningHours;
  creation_date: Date;
  modified_date: Date;
  _update_process_type: string;
}

export interface PlaceInfoTransformed {
  openingHours: any;
  name: string;
  address: string;
  geo: Geography;
}
