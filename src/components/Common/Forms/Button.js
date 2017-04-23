import React, { Component } from 'react';
import Button  from 'react-bootstrap/lib/Button';

import './Button.less';

export class SibmitButton extends Component {
    render() {
        return (
            <Button type="submit">Сохранить</Button>
        )
    }

}