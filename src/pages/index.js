import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Notes',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Notes can be found at the Notes section of this site. You are welcome to contribute to them, just create an issue or pull request on the GitHub page!
      </>
    ),
  },
  {
    title: 'Slides',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Slides used during studio will be uploaded after each studio session at the Slides section of this site.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Start Here
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* <div className="text-container">
          <h2>Hello there!</h2>
          <p>I'm planning to use this page to hold my teaching resourses next semester. Just testing this for now to see if it's feasible :)</p>
        </div> */}
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row" style={{display:'flex', justifyContent:'space-around'}}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
