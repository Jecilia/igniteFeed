import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar.tsx'

export function App() {
  return (
    <div className="">
      <Header />
      <div className="max-w-app grid-cols-app mx-auto my-8 grid items-start gap-8 px-4">
        <Sidebar />
        <main>
          <Post
            author="Jecilia Teixeira"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          fugit nemo velit unde nisi fuga necessitatibus consequatur laborum,
          quis tempora, sunt cupiditate, deserunt repudiandae qui saepe
          voluptatem dignissimos nulla! Soluta."
          />
          <Post
            author="Lumenia Teixeira"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          fugit nemo velit unde nisi fuga necessitatibus consequatur laborum,
          quis tempora, sunt cupiditate, deserunt repudiandae qui saepe
          voluptatem dignissimos nulla! Soluta."
          />
        </main>
      </div>
    </div>
  )
}
