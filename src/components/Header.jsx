import HeadingOne from './HeadingOne';

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 mt-5 lg:mt-6">
      <HeadingOne>Projeto Star Wars</HeadingOne>
      <span className="italic text-sm text-gray-500">
        Busque informações sobre o universo SW!
      </span>
    </header>
  );
}
