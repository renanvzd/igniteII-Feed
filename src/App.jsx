import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'



export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Renan Veronez"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <Post
            author="Author II"
            content="New Post"
          />
        </main>
      </div>

    </div>
  )
}

export default App
