import { createSignal } from 'solid-js'
import { Button } from '~/components/ui/button'

export default function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <Button size="lg" onClick={() => setCount((count) => count + 1)}>
      Clicked {count()} time{count() === 1 ? '' : 's'}
    </Button>
  )
}
