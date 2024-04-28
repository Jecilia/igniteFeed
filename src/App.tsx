import { Header } from './components/header'
import { Post, PostType } from './components/post'
import { Sidebar } from './components/sidebar.tsx'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jecilia.png',
      name: 'Jecilia Teixeira',
      role: ' Front-End Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publisheaAt: new Date('2024-04-23 15:16:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jecilia.png',
      name: 'Lumenia Teixeira',
      role: 'Back-End Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publisheaAt: new Date('2024-04-23 15:16:00'),
  },
]
export function App() {
  return (
    <>
      <Header />
      <div className="mx-auto my-8 grid max-w-app items-start gap-8 px-4 md:grid-cols-md lg:grid-cols-app">
        <Sidebar />
        <main className="space-y-8">
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </>
  )
}
