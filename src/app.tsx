import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import "@fontsource/inter"
import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR, useColorMode } from "@kobalte/core";
import { getCookie } from "vinxi/http";
import { isServer } from "solid-js/web";

function getServerCookies() {
  "use server"
  const colorMode = getCookie("kb-color-mode")
  return colorMode ? `kb-color-mode=${colorMode}` : ""
}

export default function App() {
  const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie)
  return (
    <Router
      root={props => (
        <>
          <ColorModeScript storageType={storageManager.type} initialColorMode="light" />
          <ColorModeProvider storageManager={storageManager} initialColorMode="light">
            <div class="min-h-screen flex flex-col">
              <Nav />
              <div class="flex-1 flex">
                <Suspense>{props.children}</Suspense>
              </div>
            </div>
          </ColorModeProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
