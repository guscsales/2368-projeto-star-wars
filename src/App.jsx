import Button from './components/Button';

export default function App() {
  return (
    <div className="flex gap-2 p-10">
      <Button type="submit">Pesquisar</Button>
      <Button type="button" variant="ghost">
        Voltar
      </Button>
    </div>
  );
}
