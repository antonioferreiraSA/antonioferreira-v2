type HeaderProps = {
  title: string;
  content: string;
  age: number;
};
// this is the footer component
const Header = ({ content, title, age }: HeaderProps): JSX.Element => {
  return (
    <header>
      {title}
      {age}
      {content}
    </header>
  );
};

export default Header;
