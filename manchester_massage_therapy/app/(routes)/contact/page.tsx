'use client';

import { useState } from 'react';
import AccentSection from '@/app/_components/shared/section/AccentSection';
import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import HeaderAndComment from '@/app/_components/shared/widgets/HeaderAndComment';
import { motion } from 'framer-motion';
import { isEmailValid } from '@/libs/verification';
import FadeToFooter from '@/app/_components/shared/widgets/FadeToFooter';
import { useSearchParams } from 'next/navigation';
import Overlay from '@/app/_components/shared/widgets/Overlay';
import TextField from '@/app/_components/shared/form_widgets/textField';
import SelectField from '@/app/_components/shared/form_widgets/selectField';
import TextAreaField from '@/app/_components/shared/form_widgets/textAreaField';

const fields = [
  'Booking',
  'Services',
  'Business Inquiries',
  'Feedback',
  'Complaint',
  'Special Requests',
  'Other',
];

export default function Contact() {
  const search = useSearchParams();

  const [formState, setFormState] = useState('idle'); // idle, submitting, submitted
  const [valid, setValid] = useState(['', '', '', '']);
  const [name, setName] = useState('');
  const [nameAnimating, setNameAnimating] = useState(false);
  const [email, setEmail] = useState('');
  const [emailAnimating, setEmailAnimating] = useState(false);
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(search.get('subject') ?? '');
  const [subjectAnimating, setSubjectAnimating] = useState(false);
  const [message, setMessage] = useState('');
  const [messageAnimating, setMessageAnimating] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const newValid = ['', '', '', ''];
    if (!name) {
      newValid[0] = "Can't be empty";
      setNameAnimating(true);
      setTimeout(() => setNameAnimating(false), 100);
    }
    if (!email || !isEmailValid(email)) {
      newValid[1] = !email ? "Can't be empty" : 'Invalid email';
      setEmailAnimating(true);
      setTimeout(() => setEmailAnimating(false), 100);
    }
    if (!subject) {
      newValid[2] = "Can't be empty";
      setSubjectAnimating(true);
      setTimeout(() => setSubjectAnimating(false), 100);
    }
    if (!message) {
      newValid[3] = "Can't be empty";
      setMessageAnimating(true);
      setTimeout(() => setMessageAnimating(false), 100);
    }
    setValid(newValid);

    if (newValid.every((v) => v.length === 0)) {
      setFormState('submitting');
      const response = await fetch('/api/contact/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
        }),
      });

      if (response.ok) {
        setFormState('submitted');
      } else {
        setFormState(response.statusText);
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <AccentSection className='mt-12'>
        <HeaderAndComment className='m-auto max-w-5xl' title='Contact Us'>
          Questions about the service? Not sure what you need? Use the form
          below, or call us at{' '}
          <span className='text-accent brightness-150'>+44 7748 010179</span>,
          and let us know how we can help!
        </HeaderAndComment>
      </AccentSection>

      <PrimarySection className='relative m-auto p-8'>
        {formState === 'submitted' ? (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='text-bold w-full text-center text-2xl'
          >
            We&apos;ll get in touch ASAP!
          </motion.div>
        ) : (
          <>
            <form className='mx-auto mt-[-2rem] flex max-w-5xl flex-col gap-4 transition-colors duration-200 ease-in-out'>
              <div className='flex flex-col gap-4 md:flex-row'>
                <TextField
                  label={'Name'}
                  className={'md:w-1/2'}
                  required={true}
                  error={valid[0]}
                  value={name}
                  animating={nameAnimating}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label={'Email Address'}
                  className={'md:w-1/2'}
                  required={true}
                  error={valid[1]}
                  value={email}
                  animating={emailAnimating}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-4 md:flex-row'>
                <TextField
                  label={'Phone Number'}
                  className={'md:w-1/2'}
                  required={false}
                  value={phone}
                  onChange={(e) => {
                    const re = /^[0-9\=]+$/;
                    if (e.target.value === '' || re.test(e.target.value)) {
                      setPhone(e.target.value);
                    }
                  }}
                />
                <SelectField
                  label={'Subject'}
                  fields={fields}
                  className={'md:w-1/2'}
                  required={true}
                  error={valid[2]}
                  value={subject}
                  animating={subjectAnimating}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <TextAreaField
                label={'Message'}
                required={true}
                error={valid[3]}
                value={message}
                animating={messageAnimating}
                textAreaClassName='h-64'
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className='z-10 mt-8 h-12 w-full rounded-full bg-bookingButtonIdle text-bookingButton transition-colors duration-300 ease-in-out hover:bg-bookingButtonHover'
                onClick={onSubmit}
              >
                Submit
              </button>
              {formState !== 'idle' && formState !== 'submitting' && (
                <div className='mx-auto w-full text-center text-red-700'>
                  {formState}
                </div>
              )}
            </form>
            {formState === 'submitting' && (
              <Overlay className='z-20 ml-[-2rem] flex bg-black/25'>
                <div
                  className='m-auto h-12 w-12 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                  role='status'
                >
                  <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                    Loading...
                  </span>
                </div>
              </Overlay>
            )}
          </>
        )}
      </PrimarySection>
      <FadeToFooter />
    </div>
  );
}
