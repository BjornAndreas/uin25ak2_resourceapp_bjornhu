import Layout from "./Layout";

export default function Nav({ children }) {
  return (
    <main>
      <Layout />
      {children}
    </main>
  );
}
