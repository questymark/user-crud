import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import FormGroup from 'react-bootstrap/lib/Form';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import './InputWrapper.less';

const getStylesFromProps = ({ customMarginBottom = null }) => ({
    marginBottom: customMarginBottom,
});


export default class InputWrapper extends Component {

    render() {
        const errors = this.props.error;
        const className = cn(
            'wrapper',
            errors && 'wrapper_has-error'
        );

        return (
            <div style={getStylesFromProps(this.props)} className={className}>
                <FormGroup>
                    {this.props.label && <ControlLabel>{this.props.label}</ControlLabel>}
                    {this.props.children}
                </FormGroup>
                {errors &&
                <div className='wrapper__error'>
                    {errors[0] && errors[0].message}
                </div>
                }
            </div>
        );
    }
}

InputWrapper.propTypes = {
    children: PropTypes.any,
    error: PropTypes.array,
    label: PropTypes.string,
    tooltip: PropTypes.string,
};