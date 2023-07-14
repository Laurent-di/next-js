import Link from "next/link";

import styles from "../styles/A.module.css";

export default function A ({ linkName, route }) {
  return (
    <Link href={route} passHref legacyBehavior>
      <a className={styles.link}>{ linkName }</a>
    </Link>
  )
}
