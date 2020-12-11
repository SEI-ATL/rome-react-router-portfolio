import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  const testPosts = [
    {
      title: 'I lift weights',
      body: 'My face during squats 😭'
    },
    {
      title: 'Coding is the cheatcode to life',
      body: 'Being a software engineer is the coolest thing in the world.'
    },
    {
      title: 'Confucius',
      body: 'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.'
    }
  ]
  const [posts, setPosts] = useState(testPosts);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Content posts={posts} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;