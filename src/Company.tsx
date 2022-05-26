import './styles/Company.scss';

interface Props {
  idx: number,
  name: string,
  clickedExp: number,
  clicked: (idx: number) => void
}

const Company = ({idx, name, clickedExp, clicked}: Props) => {
  return <button className="company" onClick={() => clicked(idx)} style={{ borderLeft: clickedExp == idx ? "5px solid #FECB02" : "5px solid white" }}>{name}</button>;
};

export default Company;
