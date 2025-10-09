import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'
import NotFound from './components/NotFound'

export const getRouter = () => {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: () => <NotFound />,
  })
}
