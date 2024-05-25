import { A } from '@solidjs/router'
import { buttonVariants } from '~/components/ui/button'

export default function NotFound() {
  return (
    <main class="container flex items-center flex-col justify-center gap-4">
      <h1 class="text-7xl">Not Found</h1>
      <a class={buttonVariants({ variant: 'link' })} href="/">
        Go back home
      </a>
    </main>
  )
}
