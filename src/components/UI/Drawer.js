import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/svg-icons/navigation/menu'
import RaisedButton from 'material-ui/RaisedButton'


const blue =  '#0097a7'
const menuStyle = {
    backgroundColor: blue,
}

const buttonStyle = {
    top: 50,
}

class Draw extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    Open = () => this.setState({ open: !this.state.open });
    Close = () => this.setState({ open: !this.state.open })

    render() {
        return (
            <div>

                <Drawer
                 containerStyle={menuStyle}
                 open={this.state.open}
                 docked={true}>
                </Drawer>
                <RaisedButton
                    style={buttonStyle}
                    onClick={this.Open}
                    label='Add a new batch'
                    primary={true}
                    />

            </div>
        );
    }
}

export default Draw