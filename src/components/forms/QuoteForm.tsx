'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  businessInfoSchema,
  serviceSelectionSchema,
  contactInfoSchema,
  BusinessInfoFormData,
  ServiceSelectionFormData,
  ContactInfoFormData,
} from '@/lib/validations/quoteSchema';
import { submitQuoteRequest } from '@/lib/webhooks/quoteWebhook';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import { useWebhook } from '@/hooks/useWebhook';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { businessTypeOptions } from '@/lib/constants/businessTypes';
import { serviceOptions } from '@/lib/constants/features';

interface QuoteFormData {
  businessInfo: BusinessInfoFormData;
  serviceSelection: ServiceSelectionFormData;
  contactInfo: ContactInfoFormData;
}

const initialData: QuoteFormData = {
  businessInfo: {
    businessName: '',
    businessType: 'hvac',
    website: '',
    phone: '',
  },
  serviceSelection: {
    services: [],
    currentChallenges: '',
  },
  contactInfo: {
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
  },
};

const steps = [
  { num: 1, title: 'Business Info', description: 'Tell us about your business' },
  { num: 2, title: 'Services', description: 'What tools do you need?' },
  { num: 3, title: 'Contact', description: 'How can we reach you?' },
];

export default function QuoteForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { currentStep, data, isFirstStep, isLastStep, progress, goToNextStep, goToPreviousStep, updateData } =
    useMultiStepForm<QuoteFormData>({
      initialData,
      totalSteps: 3,
    });

  const { submit, isLoading } = useWebhook(submitQuoteRequest, {
    successMessage: "Quote request submitted! We'll be in touch soon.",
    onSuccess: () => setIsSuccess(true),
  });

  // Step 1: Business Info
  const businessInfoForm = useForm<BusinessInfoFormData>({
    resolver: zodResolver(businessInfoSchema),
    defaultValues: data.businessInfo,
  });

  // Step 2: Service Selection
  const serviceSelectionForm = useForm<ServiceSelectionFormData>({
    resolver: zodResolver(serviceSelectionSchema),
    defaultValues: data.serviceSelection,
  });

  // Step 3: Contact Info
  const contactInfoForm = useForm<ContactInfoFormData>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: data.contactInfo,
  });

  const handleStep1Submit = (formData: BusinessInfoFormData) => {
    updateData({ businessInfo: formData });
    goToNextStep();
  };

  const handleStep2Submit = (formData: ServiceSelectionFormData) => {
    updateData({ serviceSelection: formData });
    goToNextStep();
  };

  const handleStep3Submit = async (formData: ContactInfoFormData) => {
    const updatedData = { ...data, contactInfo: formData };
    updateData({ contactInfo: formData });
    await submit(updatedData);
  };

  const toggleService = (serviceId: string) => {
    const currentServices = serviceSelectionForm.getValues('services') || [];
    const newServices = currentServices.includes(serviceId as never)
      ? currentServices.filter((s) => s !== serviceId)
      : [...currentServices, serviceId];
    serviceSelectionForm.setValue('services', newServices as never, { shouldValidate: true });
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00ff87] to-[#00a8ff] flex items-center justify-center">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Quote Request Submitted!</h3>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          We've received your information and will get back to you within 24 hours with a customized quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/insightoperator/quote-call"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#00ff87] text-black font-bold hover:bg-[#00e077] transition-colors"
          >
            Book a Call Now
          </a>
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep >= step.num
                    ? 'bg-[#00a8ff] text-white'
                    : 'bg-white/10 text-white/40'
                }`}
              >
                {currentStep > step.num ? (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.num
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded-full transition-all ${
                    currentStep > step.num ? 'bg-[#00a8ff]' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-white font-semibold">{steps[currentStep - 1].title}</p>
          <p className="text-white/50 text-sm">{steps[currentStep - 1].description}</p>
        </div>
      </div>

      {/* Form steps */}
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.form
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={businessInfoForm.handleSubmit(handleStep1Submit)}
            className="space-y-6"
          >
            <Input
              label="Business Name"
              placeholder="e.g., Johnson's HVAC"
              error={businessInfoForm.formState.errors.businessName?.message}
              {...businessInfoForm.register('businessName')}
              required
            />

            <Select
              label="Business Type"
              options={businessTypeOptions}
              error={businessInfoForm.formState.errors.businessType?.message}
              {...businessInfoForm.register('businessType')}
              required
            />

            <Input
              label="Website (Optional)"
              placeholder="https://yourwebsite.com"
              error={businessInfoForm.formState.errors.website?.message}
              {...businessInfoForm.register('website')}
            />

            <Input
              label="Business Phone"
              placeholder="(555) 123-4567"
              error={businessInfoForm.formState.errors.phone?.message}
              {...businessInfoForm.register('phone')}
              required
            />

            <div className="flex justify-end">
              <Button type="submit" variant="primary" size="lg">
                Next Step
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </motion.form>
        )}

        {currentStep === 2 && (
          <motion.form
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={serviceSelectionForm.handleSubmit(handleStep2Submit)}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                What tools do you need? <span className="text-red-400">*</span>
              </label>
              <div className="grid gap-3">
                {serviceOptions.map((service) => {
                  const isSelected = (serviceSelectionForm.watch('services') || []).includes(service.id as never);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-[#00a8ff]/20 border-2 border-[#00a8ff]'
                          : 'bg-white/5 border-2 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">{service.label}</p>
                          <p className="text-white/50 text-sm">{service.description}</p>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            isSelected ? 'bg-[#00a8ff]' : 'bg-white/10'
                          }`}
                        >
                          {isSelected && (
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {serviceSelectionForm.formState.errors.services && (
                <p className="mt-2 text-sm text-red-400">
                  {serviceSelectionForm.formState.errors.services.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Current Challenges (Optional)
              </label>
              <textarea
                placeholder="Tell us about your current lead generation challenges..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30 text-sm resize-none"
                rows={4}
                {...serviceSelectionForm.register('currentChallenges')}
              />
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="ghost" onClick={goToPreviousStep}>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </Button>
              <Button type="submit" variant="primary" size="lg">
                Next Step
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </motion.form>
        )}

        {currentStep === 3 && (
          <motion.form
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={contactInfoForm.handleSubmit(handleStep3Submit)}
            className="space-y-6"
          >
            <Input
              label="Full Name"
              placeholder="John Smith"
              error={contactInfoForm.formState.errors.fullName?.message}
              {...contactInfoForm.register('fullName')}
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="john@yourbusiness.com"
              error={contactInfoForm.formState.errors.email?.message}
              {...contactInfoForm.register('email')}
              required
            />

            <Input
              label="Phone"
              placeholder="(555) 123-4567"
              error={contactInfoForm.formState.errors.phone?.message}
              {...contactInfoForm.register('phone')}
              required
            />

            <Select
              label="Preferred Contact Method"
              options={[
                { value: 'email', label: 'Email' },
                { value: 'phone', label: 'Phone Call' },
                { value: 'text', label: 'Text Message' },
              ]}
              error={contactInfoForm.formState.errors.preferredContact?.message}
              {...contactInfoForm.register('preferredContact')}
              required
            />

            <div className="flex justify-between">
              <Button type="button" variant="ghost" onClick={goToPreviousStep}>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </Button>
              <Button type="submit" variant="cta" size="lg" isLoading={isLoading}>
                Get My Quote
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
