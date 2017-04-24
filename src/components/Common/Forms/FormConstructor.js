import React, {Component} from 'react';
import yup from 'yup';
import Form from 'react-formal';
import autoBind from 'react-autobind';

export default class FormConstructor extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.schema = yup.object();
        this.state = {
            form: {},
            errors: {},
            prepared: false
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormChange(values, fields) {
        console.log(`<${fields[0]}> changed:`, values[fields[0]]);

        this.setState({ form: values }, () => {
            console.log(this.state.form);
        });
    }

    renderForm(formContent) {
        return (
            <Form
                schema={this.schema}
                value={this.state.form}
                onChange={this.handleFormChange}
                onSubmit={this.handleSubmit}
                onError={this.handleError}

            >
                {formContent}
            </Form>
        );
    }

    handleError(errors) {
        this.setState({ errors });
    }

    handleSubmit() {}

    render() {
        return null;
    }
}