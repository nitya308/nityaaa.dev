import styles from '../styles/footer.module.css';

const socials = [
  {
    key: 0,
    url: 'https://www.linkedin.com/in/nitya-agarwala',
    icon: '/images/linkedin.svg',
    icon2: '/images/linkedin2.svg',
    title: 'LinkedIn',
  },
  {
    key: 1,
    url: 'https://github.com/nitya308',
    icon: '/images/github.svg',
    icon2: '/images/github2.svg',
    title: 'GitHub',
  },
  {
    key: 2,
    url: 'mailto:nitya.agarwala.25@dartmouth.edu',
    icon: '/images/email.svg',
    icon2: '/images/email2.svg',
    title: 'Email',
  }
]

const renderInfo = () => (
  <div className={styles.footerInfo}>
    <div className={styles.footerCredits}>
      Designed and Developed by Nitya Agarwala in 2022 ©
    </div>
    <a href='https://github.com/nitya308' className={styles.footerLink}>
      View source code here
    </a>
  </div>
);

const renderSocialLinks = () => (
  <div className={styles.footerSocials}>
    {socials.map((social) => (
      <a target="_blank" href={social.url} rel="noopener noreferrer" className={styles.footerSocials} style={{ textDecoration: 'none' }}>
        <img
          height={40}
          width={40}
          src={social.icon}
          alt={social.title}>
        </img>
        <div className={styles.socialLabel}>{social.title}</div>
      </a>
    ))}
  </div>
);

export default function Footer() {
  return (
    <div className={styles.footer}>
      {renderInfo()}
      {renderSocialLinks()}
    </div>
  );

};

export { socials };
