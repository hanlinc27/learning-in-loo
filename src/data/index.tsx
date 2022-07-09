import React from "react";
import { LocationData } from "../types";

import {
  cmhImage,
  e7Conrad,
  e7SydeLab,
  e56008,
  e5SydeLounge,
  e5SydeWorkshop,
  e74043,
  danaPorterImage,
  e7SilentStudy,
  dcLibrary,
  e7Atrium,
  pacEntrance,
  stcBasement,
  qnc,
} from "../assets";

// This is the data that was collected with the environmental monitoring system and translated into location data
// For the different markers on the map, we need to display the location name, temperature, humidity, and brightness
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
    imageAlt: "Claudette Miller Hall 1st floor study hall",
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
      neutral: 15,
      negative: 5,
    },
    totalVotes: 75,
    image: e7Conrad,
    imageAlt: "Engineering 7 Conrad study space photo",
    coordinates: {
      latitude: 43.473009,
      longitude: -80.53966,
    },
  },
  {
    name: "E5 Room 6007, SYDE Lab",
    temperature: 22,
    humidity: 64,
    brightness: 378.097,
    userSatisfaction: {
      positive: 71,
      neutral: 20,
      negative: 9,
    },
    totalVotes: 29,
    image: e7SydeLab,
    imageAlt:
      "Engineering 6 Room 6007, Systems Design Engineering lab with digital instrumentation",
    coordinates: {
      latitude: 43.47301088803638,
      longitude: -80.54022251767678,
    },
  },
  {
    name: "E5 6008",
    temperature: 23,
    humidity: 68,
    brightness: 483.15686,
    userSatisfaction: {
      positive: 52,
      neutral: 12,
      negative: 36,
    },
    totalVotes: 92,
    image: e56008,
    imageAlt:
      "Engineering 5 Room 6008 pictured with desks and a window to the left",
    coordinates: {
      latitude: 43.4729395131677,
      longitude: -80.5402168,
    },
  },
  {
    name: "E5 SYDE Lounge",
    temperature: 24,
    humidity: 62,
    brightness: 542.32,
    userSatisfaction: {
      positive: 83,
      neutral: 12,
      negative: 5,
    },
    totalVotes: 211,
    image: e5SydeLounge,
    imageAlt: "Engineering 5 SYDE Lounge",
    coordinates: {
      latitude: 43.47261909,
      longitude: -80.53995705,
    },
  },
  {
    name: "E5 SYDE Workshop",
    temperature: 25,
    humidity: 66,
    brightness: 546.435,
    userSatisfaction: {
      positive: 64,
      neutral: 32,
      negative: 4,
    },
    totalVotes: 74,
    image: e5SydeWorkshop,
    imageAlt: "Engineering 5 SYDE Workshop",
    coordinates: {
      latitude: 43.47273974,
      longitude: -80.53974572,
    },
  },
  {
    name: "E7 4043",
    temperature: 23,
    humidity: 55,
    brightness: 352.166,
    userSatisfaction: {
      positive: 60,
      neutral: 30,
      negative: 10,
    },
    totalVotes: 48,
    image: e74043,
    imageAlt: "Engineering 7 Room 4043",
    coordinates: {
      latitude: 43.47296579,
      longitude: -80.539517382,
    },
  },
  {
    name: "E7 1st Floor Silent Study",
    temperature: 23,
    humidity: 62,
    brightness: 472.7878,
    userSatisfaction: {
      positive: 66,
      neutral: 28,
      negative: 6,
    },
    totalVotes: 213,
    image: e7SilentStudy,
    imageAlt: "Engineering 7 Silent Study Room on 1st Floor",
    coordinates: {
      latitude: 43.47305713,
      longitude: -80.54010869,
    },
  },
  {
    name: "Davis Centre Library",
    temperature: 26,
    humidity: 62,
    brightness: 241.7699,
    userSatisfaction: {
      positive: 34,
      neutral: 16,
      negative: 50,
    },
    totalVotes: 12,
    image: dcLibrary,
    imageAlt: "Davis Centre Library",
    coordinates: {
      latitude: 43.47301083,
      longitude: -80.54200454,
    },
  },
  {
    name: "Dana Porter Library",
    temperature: 23,
    humidity: 54,
    brightness: 296.459,
    userSatisfaction: {
      positive: 73,
      neutral: 11,
      negative: 16,
    },
    totalVotes: 32,
    image: danaPorterImage,
    imageAlt: "Dana Porter Library",
    coordinates: {
      latitude: 43.47031068,
      longitude: -80.54235333,
    },
  },
  {
    name: "Physical Activities Complex",
    temperature: 24,
    humidity: 59,
    brightness: 293.766,
    userSatisfaction: {
      positive: 11,
      neutral: 52,
      negative: 37,
    },
    totalVotes: 90,
    image: pacEntrance,
    imageAlt: "Entrance of Physical Activities Complex",
    coordinates: {
      latitude: 43.47289395,
      longitude: -80.54618235,
    },
  },
  {
    name: "Science Teaching Complex",
    temperature: 24,
    humidity: 66,
    brightness: 328.12,
    userSatisfaction: {
      positive: 63,
      neutral: 32,
      negative: 5,
    },
    totalVotes: 22,
    image: stcBasement,
    imageAlt: "Science Teaching Complex Basement Photo",
    coordinates: {
      latitude: 43.47111968,
      longitude: -80.54409285,
    },
  },
  {
    name: "Mike and Ophelia Lazaridis Quantum-Nano Centre",
    temperature: 22,
    humidity: 59,
    brightness: 213.91,
    userSatisfaction: {
      positive: 89,
      neutral: 7,
      negative: 4,
    },
    totalVotes: 77,
    image: qnc,
    imageAlt: "Mike and Ophelia Lazaridis Quantum-Nano Centre Photo",
    coordinates: {
      latitude: 43.47171842,
      longitude: -80.54397572,
    },
  },
  {
    name: "E7 6th Floor Atrium",
    temperature: 25,
    humidity: 64,
    brightness: 287.466,
    userSatisfaction: {
      positive: 12,
      neutral: 55,
      negative: 33,
    },
    totalVotes: 19,
    image: e7Atrium,
    imageAlt: "Open area photo of E7 6th Floor Atrium",
    coordinates: {
      latitude: 43.47296412,
      longitude: -80.53969706,
    },
  },
];

export default markerData;
