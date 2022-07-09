// Information type required for each marker on the map
export interface LocationData {
  name: string;
  temperature: number;
  humidity: number;
  brightness: number;
  userSatisfaction: UserSatifactionType;
  totalVotes: number;
  image: string;
  imageAlt: string;
  coordinates: CoordinateType;
}

// Satisfaction from the active input for users
export interface UserSatifactionType {
  negative: number;
  neutral: number;
  positive: number;
}

// Latitude and longitude coordinates required for the marker position
export interface CoordinateType {
  latitude: number;
  longitude: number;
}
