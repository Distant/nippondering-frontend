export type ImgUrl = {
  full: string
  thumb: string
}

export type Price = {
  currencyCode: string
  currencySymbol: string
  base: number
  extras: number
  fee: number
  estimate: number
}

export type TourPreview = {
  tourId: number
  title: string
  shortDescription: string
  description: string
  location: Location
  price: Price
  duration: string
  highlights: string[]
  images: ImgUrl[]
}

type DescriptionImg = {
  path: string
  description: string
}

type Location = {
  name: string
  slug: string
}

export type TourFull = {
  tourId: number
  title: string
  shortDescription: string
  description: string
  location: Location

  price: Price

  duration: string
  highlights: string[]

  startingTimeInfo?: string
  startingTime: Date
  meetingPoint: string
  endPoint: string
  included: string[]
  notIncluded: string[]
  notice?: string[]
  itemChecklist?: string[]
  images: DescriptionImg[]
}

export type LocationDetail = {
  locationId: number
  name: string
  description: string
  slug: string
  imagePath: ImgUrl
}