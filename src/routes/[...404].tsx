import { buttonVariants } from '~/components/ui/button'

export default function NotFound() {
  return (
    <main class="container flex flex-col items-center justify-center gap-4">
      <h1 class="text-7xl">Not Found</h1>
      <a class={buttonVariants({ variant: 'link' })} href="/">
        Go back home
      </a>
    </main>
  )
}
