import PageTitle from "./PageTitle";
import resources from "./ressurser";
import "../styles/resources.scss";

export default function Resources({ category }) {
  const filterRessurser = resources.filter(ressurs => ressurs.category === category);

  return (
    <section>
      <PageTitle title={category} />

      <ul>
        {filterRessurser.map(ressurs => (
          <li key={ressurs.url}>
            <h2>{ressurs.title}</h2> {/* Viser tittelen fra ressurser.js */}
            <a href={ressurs.url} target="_blank" rel="noopener noreferrer">
              {ressurs.url}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}