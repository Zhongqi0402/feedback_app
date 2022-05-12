import React from 'react'
import PropTypes from 'prop-types'


function Card( {children} ) {
  return (
    <div 
    className='card'
    style={{
        backgroundColor: '#fff',
        color: '#000',
    }}> 
    {children} 
    </div>
  )
}


Card.defaultProps = {
    reverse: true
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired,
}
export default Card