type FooterProps = {
  content: string;
};
// this is the footer component
const Header = ({ content }: FooterProps): JSX.Element => {
  return <Footer>{content}</Footer>;
};

export default Footer;
