import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`Dima Next.js lesson ${ keywords }`}></meta>
        <title>Pet App</title>
      </Head>
      <div className="navbar">
        <A linkName="Main" route="/" />
        <A linkName="Users" route="/users" />
      </div>
      <div>
        { children }
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
