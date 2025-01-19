

const Button = ({onclick, text, disabled}) => {
  return (
    <>
    <button onClick={onclick} disabled={disabled} className="btn btn-primary btn-outline rounded-lg">
      <p className="text-white lg:text-base md:text-md text-sm font-bold ">
      {text}
      </p>
      </button>
    </>
  )
}

export default Button