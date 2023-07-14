import Link from "next/link";
import MainContainer from "../../components/MainContainer";

import styles from "../../styles/user.module.scss";

export default function User ({ user }) {
  return (
    <MainContainer>
      <div className={styles.user}>
        <Link href="/users">Back</Link>
        <h1>User id: { user.id }</h1>
        <div>Name: { user.name }</div>
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  // By returning { props: { users } }, the User component
  // will receive `users` as a prop at build time
  return {
    props: {
      user
    },
  }
}

