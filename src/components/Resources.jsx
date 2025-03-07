import resources from "./ressurser"; 

function Resources({ category }) {
    // Filtrerer ressursene basert på category
    const filteredResources = resources.filter(resource => resource.category.toLowerCase() === category.toLowerCase());
  
    // Hvis ingen matching ressurser ble funnet, vis en feilmelding
    if (filteredResources.length === 0) {
      return <p>No resources found for this category: {category}</p>;
    }
  
    return (
      <section>
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2> {/* Vist i menneskelig lesbar format */}
        <ul>
          {filteredResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Resources;
