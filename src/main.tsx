import { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'

import ReactDom from 'react-dom/client'

import Router from '@/routes'

import './index.less'

const rootElement = document.getElementById('root') as Element | DocumentFragment
const root = ReactDom.createRoot(rootElement)
root.render(
  <HashRouter>
    <Suspense>
      <Router />
    </Suspense>
  </HashRouter>
)
