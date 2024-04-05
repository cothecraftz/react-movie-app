import PropTypes from 'prop-types'

const Navlink = ({ children, onClick }) => {
  return (
    <div className="text-light font-medium hover:text-pink" onClick={onClick}>
      <p className="cursor-pointer hover:underline">{children}</p>
    </div>
  )
}

Navlink.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}

export default Navlink
