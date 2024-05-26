import { useLocation } from '@solidjs/router'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'

export default function Nav() {
  const location = useLocation()
  function active(path: string) {
    return location.pathname === path && 'underline'
  }

  return (
    <nav class="bg-primary">
      <ul class="container flex items-center gap-4 p-3">
        <li>
          <a
            class={cn(
              buttonVariants({ variant: 'link', size: 'lg' }),
              'text-primary-foreground',
              active('/')
            )}
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            class={cn(
              buttonVariants({ variant: 'link', size: 'lg' }),
              'text-primary-foreground',
              active('/about')
            )}
            href="/about"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  )
}
