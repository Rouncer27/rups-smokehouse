import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import {
  B1White,
  B2White,
  Btn1One,
  standardWrapper,
} from "../../../styles/helpers"
import ReCAPTCHA from "react-google-recaptcha"

import submitToServer from "../../shared/formParts/functions/submitToServer"
import InputFieldTwo from "../../shared/formParts/InputFieldTwo"
import TextareaField from "../../shared/formParts/TextareaField"
import InputNumber from "../../shared/formParts/InputNumber"
import ErrorModal from "../../shared/modals/ErrorModal"
import SuccessModal from "../../shared/modals/SuccessModal"
import LoadingModal from "../../shared/modals/LoadingModal"
import icon from "../../../images/chunky-style.png"

const ContactForm = ({ data }) => {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    comments: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  })

  const setFlavours = slug => {
    setFormData(prevState => {
      return {
        ...prevState,
        [slug]: 0,
      }
    })
  }

  useEffect(() => {
    data.contactFormFlavoursAvailable.forEach(item => {
      const slug = item.name
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
      setFlavours(slug)
    })
  }, [data.contactFormFlavoursAvailable])

  const clearFormFields = () => {
    setFormData(() => {
      return {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        province: "",
        postalCode: "",
        comments: "",
      }
    })
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
      captachError: false,
    })

    clearFormFields()
  }

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleNumberKeyboard = event => {
    const newValue = parseInt(event.target.value)

    if (newValue > 25) return
    if (newValue <= 0) return

    setFormData({
      ...formData,
      [event.target.name]: newValue,
    })
  }

  const handleNumberUp = productId => {
    console.log("UP UP")
    setFormData({
      ...formData,
      [productId]: formData[productId] + 1,
    })
  }

  const handleNumberDown = productId => {
    setFormData({
      ...formData,
      [productId]: formData[productId] - 1,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    const recaptchaValue = recaptchaRef.current.getValue()

    if (recaptchaValue === "") {
      setFormStatus({
        ...formStatus,
        captachError: true,
      })
      return
    }

    setFormStatus(prevState => {
      return {
        ...prevState,
        submitting: true,
        errors: [],
      }
    })

    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    const response = await submitToServer(103, bodyFormData)

    if (!response.errors) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      })
      clearFormFields()
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
      })
    }
  }

  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="contact-form">
          <form onSubmit={handleOnSubmit}>
            <fieldset>
              <InputFieldTwo
                value={formData.firstName}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="half"
                position="start"
                title="First Name"
                type="text"
                nameId="firstName"
                required={true}
              />
              <InputFieldTwo
                value={formData.lastName}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="half"
                position="start"
                title="Last Name"
                type="text"
                nameId="lastName"
                required={true}
              />
              <InputFieldTwo
                value={formData.email}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="half"
                position="start"
                title="Your Email"
                type="email"
                nameId="email"
                required={true}
              />
              <InputFieldTwo
                value={formData.phone}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="half"
                position="start"
                title="Phone"
                type="text"
                nameId="phone"
                required={true}
              />
            </fieldset>

            <fieldset className="street-address">
              <InputFieldTwo
                value={formData.streetAddress}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="full"
                position="start"
                title="Street Address"
                type="text"
                nameId="streetAddress"
                required={true}
              />
              <InputFieldTwo
                value={formData.city}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="half"
                position="start"
                title="City"
                type="text"
                nameId="city"
                required={true}
              />
              <InputFieldTwo
                value={formData.province}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="half"
                position="start"
                title="Province"
                type="text"
                nameId="province"
                required={true}
              />
              <InputFieldTwo
                value={formData.postalCode}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="half"
                position="start"
                title="Postal Code"
                type="text"
                nameId="postalCode"
                required={true}
              />
            </fieldset>

            <fieldset>
              <p>PICK YOUR FLAVOUR AND QUANTITY NEEDED</p>
              {data.contactFormFlavoursAvailable.map((flav, index) => {
                const flavSlug = flav.name
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "")

                return (
                  <InputNumber
                    key={index}
                    value={formData[flavSlug] ? formData[flavSlug] : 0}
                    handler={handleNumberKeyboard}
                    handleNumberUp={handleNumberUp}
                    handleNumberDown={handleNumberDown}
                    errors={formStatus.errors}
                    size="half"
                    position="start"
                    title={flav.name}
                    type="number"
                    nameId={flavSlug}
                    required={false}
                    color={flav.colour}
                  />
                )
              })}
            </fieldset>
            <fieldset>
              <TextareaField
                value={formData.comments}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="full"
                position="start"
                title="Comments or Questions"
                type="text"
                nameId="comments"
                required={false}
                rows={4}
              />
            </fieldset>

            <div className="captcha-container">
              {formStatus.captachError && (
                <p>
                  The form will not submit until you have checked the reCAPCHA.
                </p>
              )}
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Ldwlf8mAAAAAGF9ggf_4x8TLDATZW2IfA2PIJjP"
              />
            </div>

            <SubmitButton>
              <p className="required-note">
                Required fields are marked with a <span>&#42;</span>
              </p>
              <button type="submit">Place Order</button>
            </SubmitButton>
          </form>
        </div>
      </div>
      {formStatus.submitting && <LoadingModal />}
      {formStatus.success && (
        <SuccessModal handleSuccessModalClose={handleSuccessModalClose} />
      )}
      {formStatus.errorWarnDisplay && (
        <ErrorModal handleErrorModalClose={handleErrorModalClose} />
      )}
      <div
        className="icon-chunky"
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  background-color: #212326;
  padding: 4rem 0;

  .icon-chunky {
    display: none;
    position: absolute;
    bottom: 35%;
    right: -2rem;
    width: calc(86.9rem / 4);
    height: calc(86.9rem / 4);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .wrapper {
    ${standardWrapper};
  }

  form {
    width: 100%;

    fieldset {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      padding: 0;
      margin: 0;
      border: none;
    }

    p {
      ${B2White};
    }

    .street-address {
      margin-bottom: 5rem;
    }
  }
`

const SubmitButton = styled.div`
  margin-top: 5rem;

  p {
    ${B1White};
  }

  p.required-note {
    font-size: 1.4rem;
  }

  button {
    ${Btn1One};
    cursor: pointer;
  }
`

export default ContactForm
