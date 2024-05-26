import './app.css'
import '@fontsource/inter'
import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from '@kobalte/core'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import Nav from '~/components/Nav'
import { Suspense } from 'solid-js'
import { isServer } from 'solid-js/web'
import { getCookie } from 'vinxi/http'

function getServerCookies() {
  'use server'
  const colorMode = getCookie('kb-color-mode')
  return colorMode ? `kb-color-mode=${colorMode}` : ''
}

export default function App() {
  const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie)
  return (
    <Router
      root={(props) => (
        <>
          <ColorModeScript initialColorMode="dark" storageType={storageManager.type} />
          <ColorModeProvider initialColorMode="dark" storageManager={storageManager}>
            <div class="flex min-h-screen flex-col">
              <Nav />
              <div class="flex flex-1">
                <Suspense>{props.children}</Suspense>
              </div>
            </div>
          </ColorModeProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
