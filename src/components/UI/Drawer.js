import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/svg-icons/navigation/menu'

import { lightBlue400 } from 'material-ui/styles/colors'

const menuStyle = {
    backgroundColor: lightBlue400,
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
                <Menu
                    style={{ height: "40px", color: "White" }}
                    label="Toggle Drawer"
                    onClick={this.Open}
                />
                <Drawer
                 containerStyle={menuStyle}
                 open={this.state.open}
                 docked={true}>
                </Drawer>
            </div>
        );
    }
}

export default Draw