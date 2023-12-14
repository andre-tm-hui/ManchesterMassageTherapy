'use client';

import { useState } from 'react';
import AccentSection from '@/app/_components/shared/section/AccentSection';
import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import HeaderAndComment from '@/app/_components/shared/widgets/HeaderAndComment';
import { inter } from '@/app/fonts';
import { motion } from 'framer-motion';
import { isEmailValid } from '@/libs/verification';
import FadeToFooter from '@/app/_components/shared/widgets/FadeToFooter';
import { useSearchParams } from 'next/navigation';
import Overlay from '@/app/_components/shared/widgets/Overlay';

const labelStyles = 'flex w-full flex-col gap-2';

const errorStyles = (isValid: boolean) =>
  `px-2 text-xs transition-all duration-100 ease-in-out ${
    !isValid ? 'text-red-500' : 'text-zinc-600'
  }`;

const formStyles =
  'text-secondary bg-secondary rounded-md focus:outline-none p-2 focus:ring-2 focus:ring-primary focus:ring-opacity-50';

const formVariants = {
  idle: {
    x: 0,
    y: 0,
  },
  error: {
    x: [0, -2, -2, 2, 2, 0],
    y: [0, -1, 1, -1, 1, 0],
    transition: { repeat: Infinity, times: [0, 0.1, 0.3, 0.5, 0.7, 1] },
  },
};

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
                <label className={`md:w-1/2 ${labelStyles}`}>
                  <div>
                    Name:
                    <span className={errorStyles(!valid[0])}>
                      *{valid[0] || 'required'}
                    </span>
                  </div>
                  <motion.input
                    variants={formVariants}
                    animate={nameAnimating ? 'error' : 'idle'}
                    value={name}
                    className={`h-8 ${formStyles}`}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className={`md:w-1/2 ${labelStyles}`}>
                  <div>
                    Email Address:
                    <span className={errorStyles(!valid[1])}>
                      *{valid[1] || 'required'}
                    </span>
                  </div>
                  <motion.input
                    variants={formVariants}
                    animate={emailAnimating ? 'error' : 'idle'}
                    value={email}
                    className={`h-8 ${formStyles}`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className='flex flex-col gap-4 md:flex-row'>
                <label className={`md:w-1/2 ${labelStyles}`}>
                  Phone Number:
                  <input
                    className={`h-8 ${formStyles}`}
                    value={phone}
                    onChange={(e) => {
                      const re = /^[0-9\=]+$/;
                      if (e.target.value === '' || re.test(e.target.value)) {
                        setPhone(e.target.value);
                      }
                    }}
                  />
                </label>
                <label className={`md:w-1/2 ${labelStyles}`}>
                  <div>
                    Subject:
                    <span className={errorStyles(!valid[2])}>
                      *{valid[2] || 'required'}
                    </span>
                  </div>
                  <motion.select
                    variants={formVariants}
                    animate={subjectAnimating ? 'error' : 'idle'}
                    value={subject}
                    className={`h-8 ${formStyles} text-sm ${inter.className}`}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value='' hidden>
                      Select a subject
                    </option>
                    <option>Booking</option>
                    <option>Services</option>
                    <option>Business Inquiries</option>
                    <option>Feedback</option>
                    <option>Complaint</option>
                    <option>Special Requests</option>
                    <option>Other</option>
                  </motion.select>
                </label>
              </div>
              <label className={labelStyles}>
                <div>
                  Name:
                  <span className={errorStyles(!valid[3])}>
                    *{valid[3] || 'required'}
                  </span>
                </div>
                <motion.textarea
                  variants={formVariants}
                  animate={messageAnimating ? 'error' : 'idle'}
                  className={`h-64 ${formStyles}`}
                  value={message}
                  style={{ resize: 'none' }}
                  onChange={(e) => setMessage(e.target.value)}
                ></motion.textarea>
              </label>
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
