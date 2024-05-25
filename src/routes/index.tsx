import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="container flex items-center flex-col justify-center gap-4">
      <h1 class="text-7xl">Hello world!</h1>
      <Counter />
    </main>
  );
}
