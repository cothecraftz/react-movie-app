import PropTypes from 'prop-types'

const ContentWrapper = ({ children }) => {
  return <div className="content__wrapper">{children}</div>
}

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
}

export default ContentWrapper
