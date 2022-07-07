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

export interface UserSatifactionType {
  negative: number;
  neutral: number;
  positive: number;
}

export interface CoordinateType {
  latitude: number;
  longitude: number;
}
