type FooterProps = {
  content: string;
};

const Footer = ({ content }: FooterProps): JSX.Element => {
  return <footer>{content}</footer>;
};

export default Footer;
