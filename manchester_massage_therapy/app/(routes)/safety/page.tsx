import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import FadeToFooter from '@/app/_components/shared/widgets/FadeToFooter';

export default function Safety() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <PrimarySection className='mx-auto mb-[4rem] w-full max-w-5xl space-y-8'>
        <h1 className='text-5xl font-bold'>Safety and Well-being</h1>

        <p>
          At Manchester Massage Therapy, your safety and well-being are our top
          priorities. We strive to create a comfortable and secure environment
          for every massage experience. Please take a moment to review our
          safety guidelines to ensure a relaxing and enjoyable session.
        </p>
        <h2 className='text-3xl font-bold'>
          Professional and Trained Therapists
        </h2>
        <p>
          All our massage therapists are highly trained professionals committed
          to providing exceptional service. They undergo rigorous training in
          massage techniques, client communication, and safety protocols. Rest
          assured that you are in capable hands. COVID-19 Precautions
          <br />
          <br />
          In light of the ongoing COVID-19 pandemic, we have implemented
          additional measures to safeguard your health:
          <ul className='my-2 ml-12 list-disc space-y-2'>
            <li>
              Pre-session Screening: Prior to each appointment, clients and
              therapists will undergo a brief health screening to ensure a safe
              environment.
            </li>

            <li>
              Enhanced Sanitation: Our equipment and massage accessories are
              thoroughly sanitized between each session. High-touch surfaces in
              our mobile units are regularly disinfected.
            </li>

            <li>
              Personal Protective Equipment (PPE): Therapists will wear
              appropriate PPE, including masks and gloves, during the session to
              minimize the risk of transmission.
            </li>

            <li>
              Limited Contact: We encourage minimal physical contact beyond the
              massage session itself. Online payment options are available to
              reduce in-person interactions.
            </li>
          </ul>
        </p>

        <h2 className='text-3xl font-bold'>Your Health and Comfort</h2>

        <p>
          To enhance your massage experience and prioritize your health:
          <ul className='my-2 ml-12 list-disc space-y-2'>
            <li>
              Communication: Please communicate openly with your therapist about
              any specific health concerns or preferences you may have.
            </li>

            <li>
              Hydration: Drink plenty of water before and after your massage to
              stay hydrated and aid in the body&apos;s natural detoxification
              process.
            </li>

            <li>
              Post-Massage Care: Take a few moments to relax after your massage.
              If you experience any discomfort or have questions, our therapists
              are here to assist you.
            </li>
          </ul>
        </p>
        <h2 className='text-3xl font-bold'>Emergency Preparedness</h2>
        <p>
          In the unlikely event of an emergency during your massage session, our
          therapists are trained to respond promptly and appropriately. Your
          safety is our primary concern.
          <br />
          <br />
          Feel free to contact us if you have any questions or would like
          additional information about our safety measures.
          <br />
          <br />
          Thank you for choosing Manchester Massage Therapy. We look forward to
          providing you with a rejuvenating and safe massage experience.
        </p>
      </PrimarySection>
      <FadeToFooter />
    </main>
  );
}
