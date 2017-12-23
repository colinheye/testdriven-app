import React from 'react';
import { Redirect } from 'react-router-dom';

const Form = (props) => {

    if (props.isAuthenticated) {
        return <Redirect to='/' />;
    }

    return (
        <div>
            <h1>{props.formType}</h1>
            <hr /><br />
            <form onSubmit={(event) => props.handleUserFormSubmit(event)}>
                {props.formType === 'Register' &&
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control input-lg"
                            name='username'
                            placeholder="Enter a username"
                            value={props.formData.username}
                            required
                            onChange={props.handleFormChange}
                        />
                    </div>
                }
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control input-lg"
                        name='email'
                        placeholder="Enter an email address"
                        required
                        value={props.formData.email}
                        onChange={props.handleFormChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control input-lg"
                        name='password'
                        placeholder="Enter a password"
                        value={props.formData.password}
                        required
                        onChange={props.handleFormChange}
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    value="Submit"
                />
            </form>
        </div>
    )
};

export default Form;
