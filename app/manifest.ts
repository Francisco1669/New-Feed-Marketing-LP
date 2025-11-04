import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'New Feed Marketing',
    short_name: 'New Feed',
    description: 'Agência de Marketing Digital em Uruguaiana - RS',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f37021',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
