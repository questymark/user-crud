import React, { Component } from 'react';
import Button  from 'react-bootstrap/lib/Button';

import './Button.less';

export const SibmitButton = props => {
    return props.loading ?
        <Button type="submit" disabled>Сохранение...</Button>
            :
        <Button type="submit">Сохранить</Button>
};