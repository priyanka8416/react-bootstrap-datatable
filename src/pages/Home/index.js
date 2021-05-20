import React from 'react';
import arrow from '../../arrow.svg';
import './index.css';

const Home = () => {
  return (
    <div>
      <div className="p-4 d-flex justify-content-center">
        <h3 className="pb-2 text-center">React component links &amp; its Github repository<img className="arrow" src={arrow} alt="arrow" /></h3>
      </div>
      <div className="d-flex justify-content-center">
        <a class="btn btn-primary" href="https://github.com/priyanka8416/react-deposit" role="button" target="_blank" rel="noreferrer">Github Repository</a>
      </div>
    </div>
  )
}

export default Home;
