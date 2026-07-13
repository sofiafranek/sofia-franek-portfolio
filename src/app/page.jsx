import HomeCarousel from '@/components/HomeCarousel'
import {client} from '@/sanity/client'
import {HOME_PROJECTS_QUERY} from '@/sanity/queries'

export const revalidate = 60

export default async function HomePage() {
  const projects = await client.fetch(HOME_PROJECTS_QUERY)

  return <HomeCarousel projects={projects} />
}