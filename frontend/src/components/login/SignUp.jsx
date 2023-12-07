import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailexist, signupapi } from "../../Redux/action/loginAction";
import { Form, Field, FormSpy } from "react-final-form";

function SignUp() {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const emailcheck = useSelector((state) => state.signup.useremail.msg);
    console.log(emailcheck, "Dddfdfdfd");
    const [inputValue, setInputValue] = useState("");
    const [debouncedInputValue, setDebouncedInputValue] = useState("");
    const onSubmit = (values) => {
        console.log(values, "sdsdfdgd");

        dispatch(signupapi(values)).then((res) => {
            console.log(res.payload, "isjiosdlsal");
            if (res?.payload && res?.payload?.success) {
                navi("/login");
            } else {
                // console.log(res.payload.msg, "sdsdsqwerty");
                console.log("test");
                if (res?.payload && res?.payload?.msg) {
                    alert(res.payload.msg);


                }
            }
        });
    };
    const validates = (values) => {
        const errors = {};

        if (!values.Location) {
            errors.Location = "Required";
        }
        if (!values.number) {
            errors.number = "Required";
        }
        if (!values.email) {
            errors.email = "Required";
        }
        if (!values.password) {
            errors.password = "Required";
        }
        if (!values.confirm) {
            errors.confirm = "Required";
        } else if (values.confirm !== values.password) {
            errors.confirm = "Must match";
        }
        return errors;
    };
    const initialValues = {
        name: "",
        email: "",
        Location: "",
        number: "",
        password: "",
    };
    const handleEmailCheck = (e) => {
        console.log("vgvdvdgdgs");
        console.log(e, "shshshhshshs");
        setInputValue(e);
        // dispatch(emailexist())
    };
    console.log(inputValue, "inputValue");
    console.log(debouncedInputValue, "debouncedInputValue");
    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedInputValue(inputValue);
        }, 1000);
        if (debouncedInputValue) {
            dispatch(emailexist({ email: debouncedInputValue }));

            // if (emailcheck) {
            //     alert(emailcheck)
            // }
        }
        return () => clearTimeout(delayInputTimeoutId);
    }, [inputValue, 500]);

    return (
        <div className="container py-4">
            <Row>
                <Col></Col>
                <Col lg="9">
                    <Card style={{ width: "38rem" }}>
                        <div className="bacgorund">
                            <Card.Body>
                                <div>
                                    <h2>Sign up</h2>
                                </div>
                                <Form
                                    onSubmit={onSubmit}
                                    validate={validates}
                                    initialValues={initialValues}
                                    render={({ handleSubmit }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3 div_ofinput">
                                                <Field name="name">
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <input
                                                                {...input}
                                                                type="text"
                                                                placeholder="Name"
                                                            />
                                                            {meta.error && meta.touched && (
                                                                <span>{meta.error}</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="mb-3 div_ofinput">
                                                <Field name="email">
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <input
                                                                {...input}
                                                                onChange={(e) => {
                                                                    input.onChange(e);

                                                                    handleEmailCheck(e.target.value);
                                                                }}
                                                                type="text"
                                                                placeholder="Email"
                                                            />
                                                            {meta.error && meta.touched && (
                                                                <span>{meta.error}</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="mb-3 div_ofinput">
                                                <Field name="Location">
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <label
                                                                for="Location"
                                                                className="form-label"
                                                            ></label>
                                                            <input
                                                                {...input}
                                                                type="text"
                                                                placeholder="Location  address"
                                                            />
                                                            {meta.error && meta.touched && (
                                                                <span>{meta.error}</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="mb-3 div_ofinput">
                                                <Field name="number">
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <input
                                                                {...input}
                                                                type="telephone"
                                                                placeholder="number"
                                                            />
                                                            {meta.error && meta.touched && (
                                                                <span>{meta.error}</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="mb-3 div_ofinput">
                                                <Field name="password">
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <input
                                                                {...input}
                                                                type="Password"
                                                                placeholder="Password"
                                                            />
                                                            {meta.error && meta.touched && (
                                                                <span>{meta.error}</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="mb-3 div_ofinput">
                                                <Field name="confirm">
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <input
                                                                {...input}
                                                                type="Password"
                                                                placeholder="confirm Password"
                                                            />
                                                            {meta.error && meta.touched && (
                                                                <span>{meta.error}</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>

                                            <div className="buttons">
                                                <button
                                                    type="nextpage"
                                                    className=" m-3 btn btn-primary"
                                                    onClick={() => {
                                                        navi("/login");
                                                    }}
                                                >
                                                    login
                                                </button>
                                                <button type="submit" className="m-3 btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                />
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default SignUp;
