import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Renan Veronez"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <Post
        author="Author II"
        content="New Post"
      />
    </div>
  )
}

export default App
