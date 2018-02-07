import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';

const primary = grey[50]; // #F44336

class RightText extends Component {
    render() {
        return (
            <Reboot >
                <div id="right-text-header" style={{ color: primary, fontFamily:"fantasy" }}>
                    <Typography type="display3" style={{ color: primary }} gutterBottom>
                        JUNE 10, 2018
                    </Typography>
                    <Typography type="display2" style={{ color: primary }} gutterBottom>
                        Save the Date
                    </Typography>
                   
                </div>
            </Reboot>
        );
    }
}

export default RightText;
