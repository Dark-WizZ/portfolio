import styles from './BgAnimation.module.scss'

function BgAnimation() {
  return ( <div className='bg-animation'>
    <div id={styles.stars}></div>
    <div id={styles.stars2}></div>
    <div id={styles.stars3}></div>
    <div id={styles.stars4}></div>
  </div> );
}

export default BgAnimation;