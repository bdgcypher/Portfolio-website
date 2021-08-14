import React from 'react';
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
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/" id="top">BG</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Send me a message</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInput type="text" required />
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Message</FormLabel>
                            <FormInput type="text" required />
                            <FormButton type="submit">Send</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default MessageMe
