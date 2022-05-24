import './styles/Company.scss';

interface Props {
  name: string;
}

const Company = ({name}: Props) => {
  return <button className="company">{name}</button>;
};

export default Company;
