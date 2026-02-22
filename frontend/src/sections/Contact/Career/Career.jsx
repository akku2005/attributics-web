import { useState } from 'react';
import Block from '../../../components/layout/Block/Block';
import { MailIcon, MapPinIcon, PhoneIcon } from '../../../components/Icons/Icons';
import { career, formLinks } from '../../../constants/contact';

const CareerForm = () => {
    return (
        <Block xpad='large' topMargin='none'>
            <section className="lg:min-h-screen items-center justify-center flex flex-col lg:justify-around grid grid-cols-1 lg:grid-cols-[3fr_3fr] gap-12 lg:gap-22 lg:mt-0 mt-20">
                {/* Left Side - Text Content */}
                <div className="flex-col flex justify-center align-center">
                    <p className="section-eyebrow">{career.eyebrow}</p>
                    <h1 className="section-title">
                        {career.headline}
                        <br />
                        <span className='highlight'>{career.highlighted}</span>
                    </h1>
                    <p className="section-description">{career.description}</p>

                    <div className='flex gap-2 mt-4 flex-col'>
                        <div className='items-center flex flex-row gap-2'>
                            <MailIcon />
                            <p className='section-description'>{career.details.email}</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <Form />
            </section>
        </Block>
    );
};

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        resume: null,
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if (name === "resume") {
            setFormData((prev) => ({ ...prev, resume: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });
    
        const payload = new FormData();
        payload.append("fullName", formData.fullName);
        payload.append("email", formData.email);
        payload.append("phone", formData.phone);
        payload.append("location", formData.location);
        payload.append("resume", formData.resume);
    
        try {
            const response = await fetch(formLinks.career, {
                method: 'POST',
                body: payload,
            });
    
            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Application received. We will get back to you soon.',
                });
    
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    location: '',
                    resume: null,
                });
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="flex-1 w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full content-description px-4 py-3 border border-[#D1D5DB] rounded-md placeholder:text-[#999] focus:outline-none focus:border-[#131212] transition-colors"
                        style={{ color: 'black' }}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full content-description px-4 py-3 border border-[#D1D5DB] rounded-md placeholder:text-[#999] focus:outline-none focus:border-[#131212] transition-colors"
                        style={{ color: 'black' }}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full content-description px-4 py-3 border border-[#D1D5DB] rounded-md placeholder:text-[#999] focus:outline-none focus:border-[#131212] transition-colors"
                        style={{ color: 'black' }}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Current Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full content-description px-4 py-3 border border-[#D1D5DB] rounded-md placeholder:text-[#999] focus:outline-none focus:border-[#131212] transition-colors"
                        style={{ color: 'black' }}
                        required
                    />
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="w-full content-description px-4 py-3 border border-[#D1D5DB] rounded-md placeholder:text-[#999] focus:outline-none focus:border-[#131212] transition-colors
                                file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0
                                file:text-sm file:font-medium
                                file:bg-[#F5614D] file:text-white
                                hover:file:bg-[#E8503C]"
                        style={{ color: 'black' }}
                        required
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="content-description w-full mt-2 px-6 py-3 bg-[#F5614D] hover:bg-[#E8503C] rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Request a consultant'} <span>→</span>
                    </button>

                    {/* Status Message */}
                    {submitStatus.message && (
                        <div
                            className={`mt-4 p-3 rounded-md text-sm ${submitStatus.type === 'success'
                                    ? 'bg-green-50 text-green-800 border border-green-200'
                                    : 'bg-red-50 text-red-800 border border-red-200'
                                }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default CareerForm;
