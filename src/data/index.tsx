import React from "react";
import { LocationData } from "../types";
import { cmhImage, e7Conrad } from "../assets";

export const markerData: LocationData[] = [
  {
    name: "Claudette Miller Hall",
    temperature: 23,
    humidity: 64,
    brightness: 429.03,
    userSatisfaction: {
      positive: 40,
      neutral: 20,
      negative: 40,
    },
    totalVotes: 41,
    image: cmhImage,
    coordinates: {
      latitude: 43.470491829369784,
      longitude: -80.53604595675326,
    },
  },
  {
    name: "Conrad Study",
    temperature: 23,
    humidity: 62,
    brightness: 473.6,
    userSatisfaction: {
      positive: 80,
      neutral: 215,
      negative: 5,
    },
    totalVotes: 75,
    image: e7Conrad,
    coordinates: {
      latitude: 43.473009,
      longitude: -80.53966,
    },
  },
];

export default markerData;
