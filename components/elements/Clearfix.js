import styled from 'styled-components/native'
import {PropTypes} from 'react'

const Clearfix = styled.View`
  ${props => (props.height ? `height: ${props.height};` : '')}
  ${props => (props.width ? `width: ${props.width};` : '')}
`
Clearfix.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number
}
export default Clearfix
