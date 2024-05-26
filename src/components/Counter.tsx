import { Button } from '~/components/ui/button'
import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <Button onClick={() => setCount((count) => count + 1)} size="lg">
      Clicked {count()} time{count() === 1 ? '' : 's'}
    </Button>
  )
}
