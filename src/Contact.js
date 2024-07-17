import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        mobile: '',
        email: '',
        message: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();

        emailjs.send('service_slu4oas', 'template_j3f8cly', data, 'jokOprs5GqazrEZQ1')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
                setData({ fullname: '', mobile: '', email: '', message: '' });
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again.');
            });
    };

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter the Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Phone</label>
                                <input type="number" className="form-control"
                                    name="mobile"
                                    value={data.mobile}
                                    onChange={InputEvent}
                                    placeholder="Enter The Mobile No" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                                <input type="email" className="form-control"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" rows="3"
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}></textarea>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
