import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length < 1 ) {
            setError('true');
            console.log('trueee')
        }
        if(email.length < 1) {
            setError('true')
        }
        if(message.length < 1) {
            setError('true');
        }
        
        if(error) {
            toast.error('Please fill out the all the components', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                });
        }
        else {
        const contactData = {name, email, message}
        console.log(contactData);
        }

        setEmail('');
        setMessage('');
        setName('');
        setError('false')
        
    }

    return (
        <div className="contact" onSubmit={handleSubmit}>
            <form>
                <label>Name</label>
                <input type="text" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}                />
                <label>Email </label>
                <input type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}                />
                <label>Message </label>
                <textarea 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button >Submit</button>
                <div className="toast">
                <ToastContainer />
                </div>
            </form>
        </div>
    )
}

export default Contact