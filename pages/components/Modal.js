import React from 'react'
import styled from 'styled-components'

const Modal = ({ visible }) => {
    const [submitted, setSubmitted] = React.useState(false);
    const joinHandler = () => {
        setSubmitted(true)// after doing all the task
    }
    return (
        <>
            {
                visible ?
                    <Wrapper isSubmitted={submitted}>
                        <Container>
                            <Heading>
                                Join the waitlist.
                </Heading>
                            <Message isSubmitted={submitted}>Thankyou! we will meet soon...</Message>
                            <Form isSubmitted={submitted}>
                                <Input />
                                <Button className="waitlist-btn" onClick={joinHandler}>
                                    <span className="m-7">Join</span>
                                </Button>
                            </Form>
                        </Container>
                    </Wrapper>
                    : ""
            }
        </>
    )
}

export default Modal

const Wrapper = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:100vh;
    background-color: rgba(255,255,255,0.95);
    display:flex;
    justify-content: center;
    align-items: center;
    z-index:1000;
`

const Container = styled.div`
    border:3px solid #050b7d;
    border-radius: 5px;
    padding:50px 20px;
    max-width:350px;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Heading = styled.h1`
    text-align: center;
    color: #050b7d;
    font-size: 36px;
    font-weight:bold;
    padding-bottom: 20px;
`

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display:${props => props.isSubmitted ? "none" : "block"};
`

const Input = styled.input`
    outline:none;
    border: 3px solid #050b7d;
    border-radius: 5px;
    font-size: 18px;
    padding:5px 10px;
    margin-bottom: 20px;
`
const Button = styled.button`
    width:100%;
`
const Message = styled.h2`
    color:black;
    font-size: 18px;
    font-weight: bold;
    /* display:block; */
    display:${props => props.isSubmitted ? "block" : "none"};
`
