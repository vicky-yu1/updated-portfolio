import './styles/ContactButton.scss';

interface Props {
  text: string;
}

const ContactButton = ({text}: Props) => {
  return (
    <a href="mailto:yuvicky24@gmail.com"><button className="contact">{text}</button></a>
  );
};

export default ContactButton;
