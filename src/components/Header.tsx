type HeaderProps = {
  content: string;
};
// this is the footer component
const Header = ({ content }: HeaderProps): JSX.Element => {
  return <Header>{content}</Header>;
};

export default Header;
