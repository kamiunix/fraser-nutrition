import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState([]);
    const [messageSent, setMessageSent] = useState(false);
    const [messageStatus, setMessageStatus] = useState('');
    const [messageCallout, setMessageCallout] = useState('');
    const [sendInProgress, setSendInProgress] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        let formattedValue = value;
        // Format the phone number with hyphens if the field is 'phone'
        if (name === 'phone') {
            // Remove all non-digits and then format
            const digits = value.replace(/\D/g, '').slice(0, 10); // Limit to 10 digits
            const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
            let formattedValue = '';
            if (match) {
                formattedValue = `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
            }

            // Update state only if it's a phone field and limit the value length
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: formattedValue
            }));
        } else {
            // Handle change for other inputs normally
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
        // Remove error from state when user starts typing
        setErrors(prevErrors => prevErrors.filter(error => error.field !== name));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageStatus('');
        setMessageCallout('');
        setErrors([]);
        setMessageSent(false);

        if (validateForm()) {
            setSendInProgress(true);
            fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            })
                .then((res) => {
                    if (res.status !== 200) {
                        setMessageStatus("Error!");
                        setMessageCallout("📧 Message Failed to Send!");
                    } else {
                        setMessageStatus("Success!")
                        setMessageCallout("📧 Message Sent! I'll get back to you soon.");
                    }
                    setSendInProgress(false);
                    setMessageSent(true);
                })
                .catch((err) => {
                    setMessageStatus("Error!");
                    setMessageCallout("📧 Message Failed to Send! 😵");
                    setSendInProgress(false);
                    setMessageSent(true);
                });
        }
    };

    const validateForm = () => {
        const validationErrors = [];
        if (!formData.name.trim()) {
            validationErrors.push({ field: 'name', message: 'Name is required' });
        }
        if (!formData.email.trim()) {
            validationErrors.push({ field: 'email', message: 'Email is required' });
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.push({ field: 'email', message: 'Email is invalid' });
        }
        if (!formData.phone.trim()) {
            validationErrors.push({ field: 'phone', message: 'Phone is required' });
        }
        else if (formData.phone && !/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
            validationErrors.push({ field: 'phone', message: 'Phone number is invalid' });
        }
        setErrors(validationErrors);
        return !validationErrors.length;
    };

    const getErrorMessage = (fieldName) => {
        const error = errors.find(e => e.field === fieldName);
        return error ? error.message : '';
    };

    const getPlaceholder = (fieldName) => {
        const error = errors.find(e => e.field === fieldName);
        return error ? error.message : fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    };

    const inputClass = (fieldName) => `shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.some(e => e.field === fieldName) ? 'border-red-500 text-red-500 placeholder-red-500' : 'text-gray-700'}`;

    return (
        <div className=" w-full max-w-md mx-auto mt-10">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Get In Touch</h2>
            {errors.length > 0 && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Oops!</strong>
                    <span className="block ">{"We're missing some important information"}</span>
                </div>
            )}
            {messageSent && (
                <div
                    className={(messageStatus === 'Error!' ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700') + " border px-4 py-3 rounded relative"}
                    role="alert"
                >
                    <strong className="font-bold">{messageStatus}</strong>
                    <span className="block ">{messageCallout}</span>
                </div>
            )}
            {sendInProgress && (
                <div
                    className={'bg-blue-100 border-blue-400 text-blue-700 border px-4 py-3 rounded relative'}
                    role="alert"
                >
                    <strong className="font-bold">Sending...</strong>
                    <span className="block ">{"Please wait while your message is sent"}</span>
                </div>
            )}
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-10 bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    {getErrorMessage('name') && <p className="text-red-500 text-xs italic">{getErrorMessage('name')}</p>}
                    <input
                        className={inputClass('name')}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4 pt-2">
                    {getErrorMessage('email') && <p className="text-red-500 text-xs italic">{getErrorMessage('email')}</p>}
                    <input
                        className={inputClass('email')}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4 pt-2">
                    <div className="mb-4">
                        {getErrorMessage('phone') && <p className="text-red-500 text-xs italic">{getErrorMessage('phone')}</p>}
                        <input
                            className={inputClass('phone')}
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mb-6 pt-2">
                <textarea
                    className={inputClass('message')}
                    id="message"
                    name="message"
                    placeholder={getPlaceholder('message')}
                    value={formData.message}
                    onChange={handleChange}
                />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
