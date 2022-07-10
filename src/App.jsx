import { Post } from './Post'

import './styles.css'

export function App() {
  return (
    <div>
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
