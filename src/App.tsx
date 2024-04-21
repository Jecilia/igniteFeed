import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar.tsx'

export function App() {
  return (
    <div className="">
      <Header />
      <div className="mx-auto my-8 grid max-w-app grid-cols-app items-start gap-8 px-4">
        <Sidebar />
        <main className="space-y-8">
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
