import './styles/ContactButton.scss';

interface Props {
  text: string;
}

const ContactButton = ({text}: Props) => {
  return <button className="contact">{text}</button>;
};

export default ContactButton;
