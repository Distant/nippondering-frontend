import * as React from 'react';
import { Box } from '@chakra-ui/core'
import { get, url } from '../../../utilities/fetchUtilities';
import { LocationDetail, TourPreview } from '../../../types/tour';
import Tours from '../../tours';
import { useRouter } from 'next/router';

async function fetchTours(currency?: string) {
  const [resT, resL] = await Promise.all([
    get(url(`api/tours?currency=${currency ? currency : 'USD'}`)),
    get(url(`api/locations`))
  ]);
  const [tours, locations] = await Promise.all<ToursModel, LocationDetail[]>([resT.json(), resL.json()])

  return {
    props: {
      tours: tours.items,
      locations: locations
    }
  }
}

export async function getStaticProps() {
  return fetchTours()
}

export async function getStaticPaths() {
  const res = await get(url(`api/locations`))
  const locations: LocationDetail[] = await res.json();

  return {
    paths: locations.map((l) => {
      return {
        params: {
          slug: l.slug,
        },
      }
    }),
    fallback: false,
  }
}

type ToursModel = {
  pageIndex: number
  totalPages: number
  items: TourPreview[]
}

type Props = {
  tours: TourPreview[],
  locations: LocationDetail[]
}

const Locations: React.FC<Props> = ({ tours, locations }: Props) => {
  const { slug } = useRouter().query
  return (
    <Tours tours={tours} locations={locations} location={slug as string} />
  )
}

export default Locations