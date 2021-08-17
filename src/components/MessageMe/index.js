import React from 'react';
import emailjs from 'emailjs-com';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
} from './MessageMeElements';

const MessageMe = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_bisd5ko', 'template_6av43zj', e.target, 'user_gnPTqdY8hKecqwUQdpmhB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/" id="top">BG</Icon>
                    <FormContent>
                        <Form onSubmit={sendEmail}>
                            <FormH1>Send me a message</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInput name="name" type="text" required />
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput name="email" type="email" required />
                            <FormLabel htmlFor="for">Message</FormLabel>
                            <FormInput name="message" type="text" required />
                            <FormButton type="submit">Send</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default MessageMe
