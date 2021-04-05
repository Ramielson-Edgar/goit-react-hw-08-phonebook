import React from 'react';
import s from '../HomePage/HomePage.module.css';
import banner from './img/heroImage.jpg';

const HomePage = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1 className={s.title}>Phonebook</h1>
        <p className={s.subTitle}>Welcome to Phonebook</p>
      </div>
      <img className={s.banner} src={banner} alt="heroImage" />
    </div>
  );
};

export default HomePage;
