import Counter from '~/components/Counter'
import { cn } from '~/lib/utils'

export default function Home() {
  return (
    <main class={cn('container flex flex-col items-center justify-center gap-4')}>
      <h1 class="text-7xl">Hello world!</h1>
      <Counter />
    </main>
  )
}
