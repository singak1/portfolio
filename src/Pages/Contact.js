import { useState, useEffect } from "react"
import  {   FormControl, 
            FormLabel, 
            Input, 
            Textarea, 
            Heading, 
            Button,
            useToast,
            Stack
        } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import Navbar from "../Components/Navbar";

const Contact = () => {
    //Set the title of the page dynamically
    useEffect(() => {
        document.title = "Contact";
    }, [])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const formValidation = async () => {
        let error = true;
        if(name.length >= 1 && email.length >= 1 && message.length >= 1) {
            error = false
        }
        return error;
    }

    const sendEmail = async (emailParams) => {
        let emailError = false;
        const serviceKey = process.env.REACT_APP_SERVICE_KEY;
        const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;
        await emailjs.send(serviceKey, templateKey, emailParams, publicKey)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    emailError = true;
                    console.log("There was an error");
                });
        return emailError;
    }

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        let error = await formValidation();

        if(error) {
            toast({
                title: 'Incomplete Form.',
                description: "Please fill out all the inputs!",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        else {
                const emailParams = {
                    to_name: "Akash",
                    from_name: name,
                    msg: message,
                    from_email: email,
                };
                let emailError = await sendEmail(emailParams);
                console.log(emailError);
                if( emailError ) {
                    toast({
                        size:'lg',
                        title: "Error sending email",
                        description: "Sorry, connect with me through my socials in the meantime",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                }
                else {
                    toast({
                        size:'lg',
                        title: "Thank you for your inquiry!",
                        description: "I will get back to you at the specified email ASAP",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    })
                }
            const contactData = {name, email, message}
            console.log(contactData);
            setEmail('');
            setMessage('');
            setName('');
        }
        setIsLoading(false);        
    }

    return (
        
        <div className="contact">
            <Navbar />
            <div className="contact-content">
                <Stack w={['100%', '75%', '50%']} alignContent='space-around' m='auto'>
                <Heading as='h4' size='lg' p='2'>Contact Me</Heading>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        variant='filled'
                    />
                    <FormLabel>Email </FormLabel>
                    <Input type="email"
                        id="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        variant='filled'                />
                    <FormLabel>Message </FormLabel>
                    <Textarea
                        id="message"
                        placeholder="Write your message here..." 
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        variant='filled'
                        minH={['180']}
                    />
                    {isLoading && <Button isLoading loadingText="Submitting" mt='4' mb='2' colorScheme='blue' size='lg'>Submit</Button>}
                    {!isLoading && <Button mt='4' mb='2' colorScheme='blue' onClick={handleSubmit} size='lg'>Submit</Button>}
                </FormControl>
                </Stack>
            </div>
        </div>
    )
}

export default Contact