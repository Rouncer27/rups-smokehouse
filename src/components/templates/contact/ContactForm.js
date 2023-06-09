import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { B1White, Btn1One, standardWrapper } from "../../../styles/helpers"

import submitToServer from "../../shared/formParts/functions/submitToServer"
import InputFieldTwo from "../../shared/formParts/InputFieldTwo"
import InputNumber from "../../shared/formParts/InputNumber"
import ErrorModal from "../../shared/modals/ErrorModal"
import SuccessModal from "../../shared/modals/SuccessModal"
import LoadingModal from "../../shared/modals/LoadingModal"

const ContactForm = ({ data }) => {
  console.log("ContactForm: ", data)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  })

  console.log("formData", formData)

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
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
        address: "",
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
              <InputFieldTwo
                value={formData.address}
                handler={handleOnChange}
                errors={formStatus.errors}
                size="full"
                position="start"
                title="Shipping Address or Pick up Location"
                type="text"
                nameId="address"
                required={true}
              />
            </fieldset>

            <fieldset>
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
                  />
                )
              })}
            </fieldset>

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
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background-color: #212326;
  padding: 4rem 0;

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
  }
`

const SubmitButton = styled.div`
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
