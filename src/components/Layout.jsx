import Nav from "./Nav";

function Layout({ children }) {
  return (
    <main>
      <Nav />
      <section>{children}</section>
    </main>
  );
}

export default Layout;