import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import Grid from 'material-ui/Grid';
const primary = grey[50]; // #F44336

class Countdown extends Component {
    constructor() {
        super();
        this.state = { days: 0, hours: 0, minutes: 0, seconds: 0, event_date: new Date(2018, 5, 10) };
        this.timer = 0;
    }

    updateTimer() {
        let date_now = new Date();
        // get total seconds between the times
        var delta = Math.abs(this.state.event_date - date_now) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = Math.floor(delta % 60);  // in theory the modulus is not required
        this.setState({ days, hours, minutes, seconds })

    }


    pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }
    componentDidMount() {
        this.startTimer();
    }

    startTimer() {
        if (this.timer == 0) {
            this.timer = setInterval(this.updateTimer.bind(this), 1000);
        }
    }

    render() {
        return (
         <div className="countdown blur">
         Event begins in 
                <div>
                    <Typography type="display2" style={{ color: primary }} gutterBottom>
                        {this.state.days} Days
                    </Typography>
                </div>
                    <div>
                        <Typography type="display2" style={{ color: primary }} gutterBottom>
                            {this.pad(this.state.hours)}:{this.pad(this.state.minutes)}:{this.pad(this.state.seconds)}
                        </Typography>
                    </div>



     </div>

        );
    }

}

export default Countdown;
