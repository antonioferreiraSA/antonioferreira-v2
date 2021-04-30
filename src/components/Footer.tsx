type FooterProps = {
  content: string;
};
// this is the footer component
const Footer = ({ content }: FooterProps): JSX.Element => {
  return <footer>{content}</footer>;
};

export default Footer;
