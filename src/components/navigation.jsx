import Tab from './tab';
import '../styles/navigation.scss';

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Tab name="Home" />
        <Tab name="Analysis" />
        <Tab name="Results" />
      </div>
    </> 
  )
}