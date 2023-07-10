import { useState, useEffect } from "react"
import  {   FormControl, 
            FormLabel, 
            Input, 
            Textarea, 
            Heading, 
            Button,
            useToast
        } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

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

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        let error = await formValidation();
        const serviceKey = process.env.REACT_APP_SERVICE_KEY;
        const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;
        const emailParams = {
            to_name: "Akash",
            from_name: name,
            msg: message,
            from_email: email,
        };

        if(error) {
            toast({
                title: 'Incomplete Form.',
                description: "Please fill out all the inputs!",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
        else {
            await emailjs.send(serviceKey, templateKey, emailParams, publicKey)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
            toast({
                size:'lg',
                title: "Thank you for your inquiry!",
                description: "I will get back to you at the specified email ASAP",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
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
            <Heading as='h4' size='lg'>Contact Me</Heading>
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
                />
                {isLoading && <Button isLoading loadingText="Submitting" mt='4' colorScheme='blue' size='lg'>Submit</Button>}
                {!isLoading && <Button mt='4' colorScheme='blue' onClick={handleSubmit} size='lg'>Submit</Button>}
            </FormControl>
        </div>
    )
}

export default Contact