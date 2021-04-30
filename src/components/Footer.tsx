type FooterProps = {
  content: string;
};

const Footer = ({ content }: FooterProps): JSX.Element => {
  console.log(content);
  return <footer>{content}</footer>;
};

export default Footer;
