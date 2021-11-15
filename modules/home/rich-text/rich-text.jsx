import styles from './rich-text.module.scss';

const RichText = ({children}) => 
  <div className={styles['rich-text']}>{children}</div>

export default RichText;