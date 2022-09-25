import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome!',
    img: '/img/Tumblr_l_156843609962041.gif',
    description: (
      <>
        <p>
          It's my Homepage!
        </p>
        <a href="https://www.tumblr.com/wnwnmemo/687678348302925825" target="_blank">Image Source</a>
      </>
    ),
  }
];

function Feature({ title, img, description }) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img src={img} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
