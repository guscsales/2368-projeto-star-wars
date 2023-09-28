import React from 'react';
import Button from '../components/Button';
import HeadingTwo from '../components/HeadingTwo';
import Input from '../components/Input';
import Select from '../components/Select';
import Card from '../components/Card';
import axios from 'axios';

export default function Search() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchType, setSearchType] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [resultsCount, setResultsCount] = React.useState(0);

  function handleSearchTypeChange(event) {
    setSearchType(event.target.value);
  }

  function handleSearchValueKeyUp(event) {
    setSearchValue(event.target.value);
  }

  async function handleSearchSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `https://swapi.dev/api/${searchType}/?search=${searchValue}`
      );

      // if (data && data.count) é a mesma coisa que "data?.count"
      setResultsCount(data?.count || 0);
      setResults(data?.results || []);
    } catch (e) {
      console.error(`Error`, e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mt-8">
      <form
        className="grid grid-cols-[10rem_1fr_8rem] gap-2"
        onSubmit={handleSearchSubmit}
      >
        <Select
          onChange={handleSearchTypeChange}
          options={[
            {
              label: 'Selecione',
              value: '',
              disabled: true,
              selected: true,
            },
            {
              label: 'Pessoas',
              value: 'people',
            },
            {
              label: 'Planetas',
              value: 'planets',
            },
            {
              label: 'Veículos',
              value: 'vehicles',
            },
          ]}
        />
        <Input type="text" onKeyUp={handleSearchValueKeyUp} />
        <Button>Pesquisar</Button>
      </form>
      <HeadingTwo className="mt-6">Resultados ({resultsCount})</HeadingTwo>

      {isLoading && (
        // Componentizem esse alerta
        <div className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Carregando...</span>
        </div>
      )}

      {!isLoading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
          {results.map((result) => (
            <>
              {result.birth_year && (
                <Card key={result.name} title={result.name}>
                  <div>
                    <strong>Ano de nascimento: </strong>
                    {result.birth_year}
                  </div>
                </Card>
              )}

              {result.climate && (
                <Card key={result.name} title={result.name}>
                  <div>
                    <strong>Clima: </strong>
                    {result.climate}
                  </div>
                  <div>
                    <strong>População: </strong>
                    {result.population}
                  </div>
                </Card>
              )}

              {result.model && (
                <Card key={result.name} title={result.name}>
                  <div>
                    <strong>Modelo: </strong>
                    {result.model}
                  </div>
                  <div>
                    <strong>Capacidade: </strong>
                    {result.passengers}
                  </div>
                </Card>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
