import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import FadeToFooter from '@/app/_components/shared/widgets/FadeToFooter';
import Hyperlink from '@/app/_components/shared/widgets/Hyperlink';

export default function Legal() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <PrimarySection className='mx-auto mb-[4rem] w-full max-w-5xl space-y-8'>
        <h1 className='text-5xl font-bold'>Legal Disclaimer</h1>
        <p>
          Welcome to Manchester Massage Therapy. By accessing and using our
          website and services, you agree to comply with and be bound by the
          following legal terms. Please review this information carefully.
        </p>
        <h2 className='text-3xl font-bold'>Terms of Service</h2>
        <div className='space-y-4'>
          <h3 className='text-xl'>1. Scope of Services</h3>
          <p>
            Manchester Massage Therapy provides mobile massage services
            delivered by licensed and trained massage therapists. All services
            are subject to the terms outlined in our service agreements and
            pricing policies.
          </p>
          <h3 className='text-xl'>2. Privacy Policy</h3>
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we
            collect, use, and safeguard your personal information. By using our
            services, you acknowledge and agree to the terms of our Privacy
            Policy.
          </p>
          <h3 className='text-xl'>3. Code of Conduct</h3>
          <p>
            Clients are expected to adhere to a code of conduct during massage
            sessions. Any inappropriate behavior or violation of this code may
            result in termination of the session and, if necessary, legal
            action.
          </p>
        </div>
        <h2 className='text-3xl font-bold'>Liability Disclaimer</h2>
        <div className='space-y-4'>
          <h3 className='text-xl'>1. Professional Advice</h3>
          <p>
            Information provided on our website and during massage sessions is
            for informational purposes only and should not be considered as
            professional or medical advice. Consult with a qualified healthcare
            professional for personalized advice.
          </p>
          <h3 className='text-xl'>2. Assumption of Risk</h3>
          <p>
            Clients acknowledge that massage therapy involves certain risks. By
            engaging in our services, clients assume all risks associated with
            massage therapy and release Manchester Massage Therapy and its
            therapists from any liability.
          </p>
          <h3 className='text-xl'>3. Confidentiality</h3>
          <p>
            While we take measures to ensure confidentiality, Manchester Massage
            Therapy cannot guarantee the security of information transmitted
            over the internet or during massage sessions. Clients share
            information at their own risk.
          </p>
        </div>
        <h2 className='text-3xl font-bold'>Booking and Payment Terms</h2>
        <div className='space-y-4'>
          <h3 className='text-xl'>1. Booking Policies</h3>
          <p>
            All appointments are subject to availability. Manchester Massage
            Therapy reserves the right to cancel or reschedule appointments as
            necessary.
          </p>
          <h3 className='text-xl'>2. Payment Terms</h3>
          <p>
            Clients agree to pay for services in accordance with our pricing
            policies. Late payment may result in additional fees. Refunds are
            subject to our refund policy.
          </p>
        </div>
        <h2 className='text-3xl font-bold'>Contact Information</h2>
        <p>
          For questions or concerns regarding our legal terms, please contact us
          at:{' '}
          <ul className='my-2 ml-12 list-none'>
            <li>Manchester Massage Therapy</li>
            <li>
              <a
                className='text-accent brightness-150'
                href='mailto:legal@manchestermassagetherapy.co.uk'
              >
                legal@manchestermassagetherapy.co.uk
              </a>
            </li>
            <li>
              <a className='text-accent brightness-150' href='tel:07748010179'>
                +44 7748 010179
              </a>
            </li>
          </ul>{' '}
          Changes to Terms Manchester Massage Therapy reserves the right to
          update these legal terms at any time. Changes will be effective
          immediately upon posting on our website.
        </p>
        <p>
          Thank you for choosing Manchester Massage Therapy. By using our
          services, you agree to these terms and conditions.
        </p>
      </PrimarySection>
      <FadeToFooter />
    </main>
  );
}
