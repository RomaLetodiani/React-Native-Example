import { agents, galleries, reviews } from "@/lib/data";
import {
  agentImages,
  facilitiesArray,
  galleryImages,
  propertiesImages,
  propertyTypesArray,
  reviewImages,
} from "./data";

export const createAgent = (i: number) => ({
  id: `agent-${i}`,
  name: `Agent ${i}`,
  email: `agent${i}@example.com`,
  avatar: agentImages[Math.floor(Math.random() * agentImages.length)],
});

export const createReview = (i: number) => ({
  id: `review-${i}`,
  name: `Reviewer ${i}`,
  avatar: reviewImages[Math.floor(Math.random() * reviewImages.length)],
  review: `This is a review by Reviewer ${i}.`,
  rating: Math.floor(Math.random() * 5) + 1, // Rating between 1 and 5
});

export const createGallery = (i: number) => ({
  id: `gallery-${i}`,
  image: galleryImages[Math.floor(Math.random() * galleryImages.length)],
});

export const createProperty = (i: number) => {
  const assignedAgent = agents[Math.floor(Math.random() * agents.length)];

  const assignedReviews = getRandomSubset(reviews, 5, 7); // 5 to 7 reviews
  const assignedGalleries = getRandomSubset(galleries, 3, 8); // 3 to 8 galleries

  const selectedFacilities = facilitiesArray
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * facilitiesArray.length) + 1);

  const image =
    propertiesImages.length - 1 >= i
      ? propertiesImages[i]
      : propertiesImages[Math.floor(Math.random() * propertiesImages.length)];

  const property = {
    id: `property-${i}`,
    name: `Property ${i}`,
    type: propertyTypesArray[Math.floor(Math.random() * propertyTypesArray.length)],
    description: `This is the description for Property ${i}.`,
    address: `123 Property Street, City ${i}`,
    geolocation: `192.168.1.${i}, 192.168.1.${i}`,
    price: Math.floor(Math.random() * 9000) + 1000,
    area: Math.floor(Math.random() * 3000) + 500,
    bedrooms: Math.floor(Math.random() * 5) + 1,
    bathrooms: Math.floor(Math.random() * 5) + 1,
    rating: Math.floor(Math.random() * 5) + 1,
    facilities: selectedFacilities,
    image,
    agent: assignedAgent.id,
    reviews: assignedReviews.map((review) => review.id),
    gallery: assignedGalleries.map((gallery) => gallery.id),
  };

  return property;
};

export type Property = ReturnType<typeof createProperty>;

export const getRandomSubset = <T>(array: T[], minItems: number, maxItems: number): T[] => {
  if (minItems > maxItems) {
    throw new Error("minItems cannot be greater than maxItems");
  }
  if (minItems < 0 || maxItems > array.length) {
    throw new Error("minItems or maxItems are out of valid range for the array");
  }

  // Generate a random size for the subset within the range [minItems, maxItems]
  const subsetSize = Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;

  // Create a copy of the array to avoid modifying the original
  const arrayCopy = [...array];

  // Shuffle the array copy using Fisher-Yates algorithm
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[i]];
  }

  // Return the first `subsetSize` elements of the shuffled array
  return arrayCopy.slice(0, subsetSize);
};
