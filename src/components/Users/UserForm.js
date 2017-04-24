import React, { Component } from 'react';
import yup from 'yup';
import { Field } from 'react-formal';
import { withRouter, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import InputWrapper from 'components/Common/Forms/InputWrapper';
import FormConstructor from 'components/Common/Forms/FormConstructor';
import { SibmitButton } from 'components/Common/Forms/Button';
import Calendar from 'components/Widgets/Calendar';
import { createUser, getUser } from 'ducks/users';

const getState = state => ({
    createUserLoading: state.users.createUserLoading,
    createUserLoaded: state.users.createUserLoaded,

    userLoading: state.users.userLoading,
    userLoaded: state.users.userLoaded,
    user: state.users.user
});

const getActions = dispatch => bindActionCreators({
    createUser,
    getUser,
}, dispatch);

class UserForm extends FormConstructor {
    constructor(props) {
        super();
        this.schema = yup.object().shape({
            name: yup.string()
                .matches(/\S/, 'Имя состоит из одних пробелов')
                .max(255, 'Слишком длинное имя')
                .matches(/^[a-zA-Zа-яА-ЯёЁ]+[a-zA-Zа-яА-ЯёЁ|\d|\s|-]*$/, 'Имя должно начинаться с буквы и может содержать буквы, цифры и тире')
                .required('Имя обязательно для заполнения'),
            birthday: yup.date()
                .max(new Date(), "Вы не можете родиться в будущем")
                .required('Дата рождения обязательна для заполнения'),
            city: yup.string()
                .required('Город обязателен для заполнения'),
            adress: yup.string()
                .required('Адрес обязателен для заполнения'),
            phone: yup.string()
                .required('Телефон обязателен для заполнения'),
            some: yup.object()
        });

        this.state = {
            form: this.schema.default(),
            errors: {}
        };
    }

    componentWillMount() {
        const { userId } = this.props.params;

        if (userId !== 'new') {
            this.props.getUser(userId);
        }
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.userLoading && nextProps.userLoaded) {
            const formValue = this.schema.cast(nextProps.user);

            this.setState({
                form: {...formValue, birthday: moment(formValue.birthday)}
            });
        }

        if (this.props.createUserLoading && nextProps.createUserLoaded) {
            browserHistory.push('users');
        }
    }

    handleSubmit(formData) {
        this.props.createUser(formData);

        console.log('submitting values:', formData);
    }

    render() {
        return this.renderForm(
            <div>
                <h2>Новый пользователь</h2>
                <div>
                    <InputWrapper label='Имя' error={this.state.errors.name}>
                        <Field name='name' placeholder='Имя' className='form-control' />
                    </InputWrapper>

                    <InputWrapper label='Дата рождения'  error={this.state.errors.birthday}>
                        <Field name='birthday' placeholder='Дата рождения' type={Calendar} />
                    </InputWrapper>

                    <InputWrapper label='Город'  error={this.state.errors.city}>
                        <Field name='city' placeholder='Город' className='form-control' />
                    </InputWrapper>

                    <InputWrapper label='Адрес'  error={this.state.errors.adress}>
                        <Field name='adress' placeholder='Адрес' className='form-control' />
                    </InputWrapper>

                    <InputWrapper label='Телефон'  error={this.state.errors.phone}>
                        <Field name='phone' mask="+4\9 99 999 99" placeholder='Телефон' className='form-control' />
                    </InputWrapper>

                    <InputWrapper>
                        <SibmitButton>Сохранить</SibmitButton>
                    </InputWrapper>
                </div>
            </div>
        );
    }
}

export default connect(getState, getActions)(UserForm);