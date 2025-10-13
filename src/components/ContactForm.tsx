import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 50%;
    background-color: white;
    padding: 10px;

    input {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
    }


`;

const ContactForm = () => {

    function handleFormSubmit(e: any) {
        e.preventDefault();
    }

    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <label htmlFor="first-name-field">First Name</label>
            <input type="text" name="first-name-field"></input>
            <label htmlFor="last-name-field">Last Name</label>
            <input type="text" name="last-name-field"></input>
            <label htmlFor="email-field">Email</label>
            <input type="text" name="last-name-field"></input>
            <input type="button" name="submit-button" value="Submit"></input>
        </StyledForm>
    )
};

export default ContactForm;