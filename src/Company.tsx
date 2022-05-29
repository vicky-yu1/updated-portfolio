import { useContext } from 'react'
import { ScreenContext } from './App'
import './styles/Company.scss';

interface Props {
  idx: number,
  name: string,
  clickedExp: number,
  clicked: (idx: number) => void
}

const Company = ({idx, name, clickedExp, clicked}: Props) => {
  const appContext = useContext(ScreenContext);

  if(appContext) {
    return <button className="company" onClick={() => clicked(idx)} style={{ borderLeft: clickedExp == idx ? "5px solid #FECB02" : "5px solid white" }}>{name}</button>;
  }
  else {
    return <button className="company" onClick={() => clicked(idx)} style={{ borderBottom: clickedExp == idx ? "5px solid #FECB02" : "5px solid white" }}>{name}</button>;
  }

  
};

export default Company;
