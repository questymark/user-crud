import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './Calendar.less';
import 'react-datepicker/dist/react-datepicker.css';

export default class Calendar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });

        this.props.onChange && this.props.onChange(date)
    }

    render() {
        return <DatePicker
            dateFormat="DD.MM.YYYY"
            className='form-control'
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            selected={this.state.startDate}
            onChange={this.handleChange}
        />;
    }
}