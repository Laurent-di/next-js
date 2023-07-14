import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords='lists-of-users'>
      <h1>List of users</h1>
      <ul>
        { users.map(user => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                { user.name }
              </Link>
            </li>
          )
        }) }
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  // By returning { props: { users } }, the User component
  // will receive `users` as a prop at build time
  return {
    props: {
      users,
    },
  }
}
