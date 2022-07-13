import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/renanvzd.png",
      name: "Renan Veronez",
      role: "Front-End Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir um post', },
      { type: 'link', content: 'teste.design/siteprototipo', },
      { type: '', content: '', },
    ],
    publishedAt: new Date('2022-07-5 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/renanveronez.png",
      name: "Renan Drechsler",
      role: "Back-End Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir um post', },
      { type: 'link', content: 'teste.design/siteprototipo', },
      { type: '', content: '', },
    ],
    publishedAt: new Date('2022-07-11 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
