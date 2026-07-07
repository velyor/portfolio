import styles from '../GoldLogoSection/GoldLogoSection.module.scss';

export default function GoldLogo() {
  return (
    <div className={styles.goldLogoContainer}>
      <div className={styles.goldAbstractIcon}>
        <span className={styles.goldGradientText}>V</span>
      </div>
    </div>
  );
}