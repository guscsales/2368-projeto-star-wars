import Button from './components/Button';
import Header from './components/Header';
import HeadingTwo from './components/HeadingTwo';
import Input from './components/Input';
import Select from './components/Select';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container mt-8">
          <form className="grid grid-cols-[10rem_1fr_8rem] gap-2">
            <Select
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
            <Input type="text" />
            <Button>Pesquisar</Button>
          </form>

          <HeadingTwo className="mt-6">Resultados</HeadingTwo>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-3">
            <Card title="Luke Skywalker">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              rerum quisquam explicabo voluptates tempora ab neque aperiam
              error, quos repudiandae optio ullam odio aspernatur quod
              consequuntur, perspiciatis, unde dolores saepe!
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
