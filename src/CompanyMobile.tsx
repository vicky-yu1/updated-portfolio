import './styles/CompanyMobile.scss';

interface Props {
  idx: number,
  name: string,
  clickedExp: number,
  clicked: (idx: number) => void
}

const CompanyMobile = ({idx, name, clickedExp, clicked}: Props) => {
    return <button className="company-mobile" onClick={() => clicked(idx)} style={{ borderBottom: clickedExp == idx ? "5px solid #FECB02" : "5px solid white" }}>{name}</button>;
  
};

export default CompanyMobile;
