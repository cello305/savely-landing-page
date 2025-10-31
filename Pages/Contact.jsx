import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageSquare, Send } from 'lucide-react';
import NavigationMenu from './Components/landing/NavigationMenu';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

export default function Contact() {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);
    
    const [formData, setFormData] = useState({
        inquiryType: 'support',
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            // EmailJS service and template configuration
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Check if EmailJS is configured
            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Email service is not configured. Please check environment variables.');
            }

            // Prepare base template parameters
            const baseParams = {
                from_name: formData.name,
                from_email: formData.email,
                inquiry_type: formData.inquiryType === 'support' ? 'Technical Support' : 'General Inquiry',
                message: formData.message,
                reply_to: formData.email
            };

            // Send emails to both recipients
            const recipients = ['jamesjbustos@gmail.com', 'warzel.emanuel@gmail.com'];
            const emailPromises = recipients.map(toEmail =>
                emailjs.send(
                    serviceId,
                    templateId,
                    {
                        ...baseParams,
                        to_email: toEmail
                    },
                    publicKey
                )
            );

            // Wait for both emails to be sent
            await Promise.all(emailPromises);

            // Success
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                inquiryType: 'support',
                name: '',
                email: '',
                message: ''
            });
            
            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Email sending failed:', error);
            setIsSubmitting(false);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Failed to send message. Please try again later.');
            
            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
                setErrorMessage('');
            }, 5000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 antialiased">
            {/* Floating gradient orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
                />
                <div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
                />
            </div>

            {/* Navigation */}
            <NavigationMenu />

            {/* Content */}
            <div className="relative pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Back to Home Link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>

                    {/* Contact Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions or feedback? We'd love to hear from you. Get in touch and we'll respond as soon as possible.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
                        {/* Inquiry Type Selection */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <label className="relative cursor-pointer">
                                <input
                                    type="radio"
                                    name="inquiryType"
                                    value="support"
                                    checked={formData.inquiryType === 'support'}
                                    onChange={handleChange}
                                    className="peer sr-only"
                                />
                                <div className={`p-6 rounded-xl border-2 transition-all ${
                                    formData.inquiryType === 'support'
                                        ? 'border-blue-500 bg-blue-50/50'
                                        : 'border-gray-200 hover:border-gray-300 bg-white/50'
                                }`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            formData.inquiryType === 'support'
                                                ? 'bg-blue-100'
                                                : 'bg-gray-100'
                                        }`}>
                                            <Mail className={`w-6 h-6 ${
                                                formData.inquiryType === 'support'
                                                    ? 'text-blue-600'
                                                    : 'text-gray-400'
                                            }`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                                            <p className="text-sm text-gray-600">
                                                Technical support & assistance
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </label>

                            <label className="relative cursor-pointer">
                                <input
                                    type="radio"
                                    name="inquiryType"
                                    value="general"
                                    checked={formData.inquiryType === 'general'}
                                    onChange={handleChange}
                                    className="peer sr-only"
                                />
                                <div className={`p-6 rounded-xl border-2 transition-all ${
                                    formData.inquiryType === 'general'
                                        ? 'border-purple-500 bg-purple-50/50'
                                        : 'border-gray-200 hover:border-gray-300 bg-white/50'
                                }`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            formData.inquiryType === 'general'
                                                ? 'bg-purple-100'
                                                : 'bg-gray-100'
                                        }`}>
                                            <MessageSquare className={`w-6 h-6 ${
                                                formData.inquiryType === 'general'
                                                    ? 'text-purple-600'
                                                    : 'text-gray-400'
                                            }`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">General Inquiry</h3>
                                            <p className="text-sm text-gray-600">
                                                Questions & feedback
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us how we can help..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center gap-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                                
                                {submitStatus === 'success' && (
                                    <div className="text-green-600 text-sm font-medium flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message sent successfully!
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="text-red-600 text-sm font-medium flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        {errorMessage || 'Failed to send message. Please try again.'}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-center">
                        <p className="text-gray-600 mb-4">
                            We typically respond to all inquiries within 24 hours during business days.
                        </p>
                        <p className="text-sm text-gray-500">
                            For technical support, please include as much detail as possible about your issue.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-200/50 backdrop-blur-sm bg-white/30 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-sm">
                            © 2025 Savely. Save smarter, shop better.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                to="/contact-us"
                                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/privacy-policy"
                                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
        </div>
    );
}

