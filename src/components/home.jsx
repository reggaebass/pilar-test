import Dropdown from './dropdown'
import Button from './button'

export default function Home() {
  return (
    <div className="landing">
      <Dropdown />
      <div className="center action">
        <Button text="button text" />
      </div>
    </div>
  )
}