const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const cities = [];

const findMatches = (word, cities) => {
  return cities.filter(
    (el) =>
      el.city.includes(word.toLowerCase()) ||
      el.state.toLowerCase().includes(word)
  );
};

const displayMatches = (e) => {
  const textValue = e.currentTarget.value.toLowerCase();
  const matchedCities = findMatches(textValue, cities);
  const html = matchedCities.map((place) => {
    const regex = new RegExp(textValue, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${textValue}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${textValue}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = html;
};

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

searchInput.addEventListener("change", (e) => displayMatches(e));
searchInput.addEventListener("keyup", (e) => displayMatches(e));
