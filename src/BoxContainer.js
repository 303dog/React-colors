import React from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends React.Component {
    static defaultProps = {
        numBoxes: 20,
        allColors: ['purple', 'magenta', 'pink', 'green', 'aqua', 'coral', 'darkorange', 'darkslategrey', 'fuchsia', 'tomato', 'slateblue']
    }

render() {
    const boxes = Array.from({length: this.props.numBoxes}).map(() => (
    <Box colors={this.props.allColors} />        
    ));
    return <div className='BoxContainer'>{boxes}</div>
}
}

export default BoxContainer;