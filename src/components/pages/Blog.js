import React from 'react'
import BlogPost from '../BlogPost'

function Blog(props) {
  let posts = props.posts.map(post => <BlogPost post={post} />)

  return (
    <div>
      <h1>The world is getting better.</h1>
      {posts}
    </div>
  )
}

export default Blog;