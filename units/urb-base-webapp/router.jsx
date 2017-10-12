// @flow

import queryMiddleware from 'farce/lib/queryMiddleware'
import makeRouteConfig from 'found/lib/makeRouteConfig'
import Route from 'found/lib/Route'
import { Resolver } from 'found-relay'
import React from 'react'
import { graphql } from 'react-relay'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

import AppFrame from '../_configuration/urb-base-webapp/AppFrame'
import routesAppFrame from '../_configuration/urb-base-webapp/routesAppFrame'
import routesRoot from '../_configuration/urb-base-webapp/routesRoot'

export const historyMiddlewares = [ queryMiddleware ]

export function createResolver( fetcher: any ) {
  const environment = new Environment({
    network: Network.create( ( ...args ) => fetcher.fetch( ...args ) ),
    store: new Store( new RecordSource() ),
  })

  return new Resolver( environment )
}

export const routeConfig = makeRouteConfig(
  <Route path="/">
    <Route
      path="/"
      Component={AppFrame}
      query={graphql`
        query router_AppFrame_Query {
          Viewer {
            ...AppFrame_Viewer
          }
        }
      `}
    >
      {routesAppFrame}
    </Route>
    {routesRoot.length > 0 && routesRoot}
  </Route>,
)
