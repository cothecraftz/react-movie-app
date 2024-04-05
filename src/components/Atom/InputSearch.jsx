import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const InputSearch = forwardRef(({ className, onClick, onChange, onKeyUp, value }, ref) => {
  return (
    <div
      className={`bg-light w-full h-12 border border-orange shadow-lg rounded-full overflow-hidden flex items-center ${className}`}
    >
      <input
        ref={ref}
        className="input__search bg-transparent h-full border-none outline-none indent-6 text-base font-semibold text-slate-700"
        type="text"
        autoComplete="off"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        autoFocus
      />
      <button
        type="button"
        onClick={onClick}
        className="btn__search w-1/6 h-full text-light text-base font-semibold"
      >
        Search
      </button>
    </div>
  )
})

InputSearch.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  value: PropTypes.string,
}

InputSearch.displayName = 'InputSearch'

export default InputSearch
