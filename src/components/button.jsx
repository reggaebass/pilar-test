import '../styles/button.scss';

export default function Button({text, url}) {
  return (
    <>
      <a href={url}>
        <button>
          {text}
        </button>
      </a>
    </>
  )
}