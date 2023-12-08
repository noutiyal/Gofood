import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Field, Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../Redux/action/loginAction'

export default function Login() {
  const disptach = useDispatch()
  const navi = useNavigate()
  

  const onSubmit = (values) => {

    disptach(loginUser(values)).then((res) => {
      console.log(res, "sdsdsds")
      if (res?.payload && res?.payload?.success) {
        localStorage.setItem("token", res.payload.token)
        navi("/")

      } else if (res.payload.msg && res.payload.msg) {
        alert(res.payload.msg)
      } else if (res.payload.newuser) {
        alert(res.payload.newuser)
        navi("/Signup")
      }
    })



  }

  const validates = (values) => {
    const error = {}
    if (!values.email) {
      error.email = ("Required")
    }
    if (!values.password) {
      error.password = ("Required")
    }

    return error
  }
  const initialValues = {
    email: "",
    password: ""

  }

  return (
    <div className='container py-4'>
      <Row>
        <Col></Col>
        <Col lg="9">

          <Row><Col lg="12"> <Card style={{ width: '50%' }} >
            <div className='bacgorund'>
              <Card.Body>
                <div>
                  <h2>
                    Login with gofood</h2>
                </div>
                <Form
                  onSubmit={onSubmit}
                  validate={validates}
                  initialValues={initialValues}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>


                      <div className="mb-3 div_ofinput">
                        <Field name="email" >
                          {({ input, meta }) => (
                            <div>
                              <input {...input} type="text" placeholder="Email" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}


                        </Field>

                      </div >


                      <div className="mb-3 div_ofinput">
                        <Field name="password">
                          {({ input, meta }) => (
                            <div>

                              <input {...input} type="Password" placeholder="password" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}
                        </Field>
                      </div >



                      <div className="buttons">

                        <button type="nextpage" className=" m-3 btn btn-primary" onClick={() => { navi("/signup") }}>signup</button>
                        <button type="submit" className="m-3 btn btn-primary">Login</button>

                      </div>
                    </form>
                  )}
                />



              </Card.Body>
            </div>
          </Card></Col></Row>





        </Col>
      </Row>
    </div>
  )
}
