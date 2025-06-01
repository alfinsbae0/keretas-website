import { useState } from 'react';

export default function FormContact() {
    const [formData, setFormData] = useState({});

    const formscontacts = [
        { id: 'name', question: "What's your name?", placeholder: "Please enter your full name", type: 'text' },
        { id: 'email', question: "What's your email?", placeholder: "Kindly provide your email address", type: 'email' },
        { id: 'phone', question: "What's your phone number?", placeholder: "If you prefer to be contacted via phone, please provide your phone number", type: 'tel' },
        { id: 'company', question: "Company name", placeholder: "Enter the name of your company, if applicable", type: 'text' },
        { id: 'website', question: "Website", placeholder: "If you have a website, please provide the URL", type: 'url' },
        { id: 'challenges', question: "Current marketing challenges", placeholder: "Briefly describe your current marketing challenges or goals.", type: 'textarea' },
        { id: 'budget', question: "Budget", placeholder: "What is your estimated budget for digital marketing services?", type: 'text' },
        { id: 'source', question: "How did you hear about us?", placeholder: "Let us know how you found out about our agency", type: 'text' },
        { id: 'comments', question: "Additional comments/questions", placeholder: "Feel free to include any additional comments or questions", type: 'textarea' },
    ];

    const handleInputChange = (id, value) => {
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit} className="md:py-6 py-2 px-5 md:px-0">
            <div className="flex flex-col space-y-5">
                {formscontacts.map((form, index) => (
                    <div key={index} className="space-y-2">
                        <label htmlFor={form.id} className="md:text-2xl text-lg text-black font-semibold block">
                            {form.question}
                        </label>

                        {form.type === 'textarea' ? (
                            <textarea
                                id={form.id}
                                name={form.id}
                                value={formData[form.id] || ''}
                                onChange={(e) => handleInputChange(form.id, e.target.value)}
                                placeholder={form.placeholder}
                                rows={4}
                                className="w-full py-2 border-0 outline-none text-gray-800 placeholder-gray-500 resize-vertical bg-transparent focus:bg-gray-50 transition-colors duration-200 md:text-base text-sm leading-relaxed placeholder:px-2"
                            />
                        ) : (
                            <input
                                id={form.id}
                                name={form.id}
                                type={form.type}
                                value={formData[form.id] || ''}
                                onChange={(e) => handleInputChange(form.id, e.target.value)}
                                placeholder={form.placeholder}
                                className="w-full px-0 py-2 border-0 outline-none text-gray-800 placeholder-gray-500 bg-transparent focus:bg-gray-50 transition-colors duration-200 md:text-base text-sm leading-relaxed text-ellipsis placeholder:text-ellipsis placeholder:overflow-hidden placeholder:whitespace-nowrap placeholder:px-2"
                            />
                        )}

                        {/* Divider line */}
                        <div className="w-full pr-10 h-px bg-gray-200"></div>
                    </div>
                ))}

                {/* Submit Button */}
                <div className="pt-6">
                    <button
                        type="submit"
                        className="w-44 bg-green-700 hover:bg-black text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
}