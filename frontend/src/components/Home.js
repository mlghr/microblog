import React from 'react';
import Footer from './Footer';
import TitleList from "./TitleList";

function Home() {
  return (
    <main>
      <p>
        Welcome to <b>Microblog</b>, an innovative site for communicating ideas.
      </p>
      <TitleList />
      <Footer />
    </main>
  );
}

export default Home;