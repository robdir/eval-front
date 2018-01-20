import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton'
import StudentEditor from '../../students/studentEditor'

const blue = '#0097a7'
const menuStyle = {
    backgroundColor: blue,
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

                    <StudentEditor />

                    <RaisedButton
                        label='Toggle draw'
                        onClick={this.Open} />
                </Drawer>
                <RaisedButton
                    onClick={this.Open}
                    label='Add a new student to batch'
                    primary={true}
                />

            </div>
        );
    }
}

export default Draw