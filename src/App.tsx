import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar.tsx'

export function App() {
  return (
    <>
      <Header />
      <div className="md:grid-cols-md mx-auto my-8 grid max-w-app items-start gap-8 px-4 lg:grid-cols-app">
        <Sidebar />
        <main className="space-y-8">
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}
