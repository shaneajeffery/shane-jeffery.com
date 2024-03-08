import FaqItem from '@/blocks/FaqItem';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Markdown from '@/components/ReactMarkdown';
import { getSinglePage } from '@/libs/getSinglePage';
import { useState } from 'react';

const Contact = ({ contactPage }) => {
  const { title, subtitle, contactForm, faq } = contactPage.frontMatter;
  const { email, mailSubject, successMessage, errorMessage } = contactForm;

  // Handler Form Submit
  const [submitted, setSubmitted] = useState('');
  const [loading, setLoading] = useState(false);
  const formsubmitURL = `https://formsubmit.co/ajax/${email}`;

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(formsubmitURL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        _subject: mailSubject,
        name: full_name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSubmitted('success');
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        setSubmitted('error');
      });
  };

  return (
    <Layout metaTitle={title}>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row justify-center">
            <div
              className="mb-24 md:col-10 lg:col-5 lg:mb-0"
              data-aos="fade-up-sm"
            >
              {contactForm && (
                <div className="mb-10">
                  <h2 className="-mt-[6px] mb-3 text-3xl font-medium">
                    {contactForm.title}
                  </h2>
                </div>
              )}
              <form
                className="pr-0 lg:pr-8"
                method="POST"
                onSubmit={formHandler}
              >
                <input
                  className="hidden"
                  type="hidden"
                  name="_subject"
                  value={mailSubject}
                />
                <div className="mb-6">
                  <label htmlFor="full_name" className="mb-2 block text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    placeholder="Charlie Edward"
                    className="h-12 w-full rounded-lg border border-light/90 bg-white px-4 py-4 outline-none transition-all duration-300 focus:border-dark/50 focus-visible:shadow-none focus-visible:outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="mb-2 block text-black">
                    Contact email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="charlie.edward@email.app"
                    className="h-12 w-full rounded-lg border border-light/90 bg-white px-4 py-4 outline-none transition-all duration-300 focus:border-dark/50 focus-visible:shadow-none focus-visible:outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block text-black">
                    Additional info
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full rounded-lg border border-light/90 bg-white px-4 py-4 outline-none transition-all duration-300 focus:border-dark/50 focus-visible:shadow-none focus-visible:outline-none"
                    placeholder="Be as detailed as possible..."
                  ></textarea>
                </div>

                {submitted === 'success' && (
                  <div className="mb-6 text-green-600">
                    <Markdown inline="false" content={successMessage} />
                  </div>
                )}
                {submitted === 'error' && (
                  <div className="mb-6 text-red-600">
                    <Markdown inline="false" content={errorMessage} />
                  </div>
                )}

                <button
                  className="button button-dark mt-2"
                  title="Send your Message"
                  type="submit"
                  aria-label="Send Message"
                >
                  <span>{!loading ? 'Send Message' : 'Sending..'}</span>
                </button>
              </form>
            </div>
            <div
              className="md:col-10 lg:col-5"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              <div className="pl-0 lg:pl-8">
                <div className="mb-10">
                  <h2 className="-mt-[6px] mb-3 text-3xl font-medium">
                    {faq.title}
                  </h2>
                  <p className="text-black/75">{faq.subtitle}</p>
                </div>
                {faq.qaLists.map((item, index) => (
                  <FaqItem key={index} index={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

// Export Props
export const getStaticProps = () => {
  const contact = getSinglePage('./src/content/contact.md');

  return {
    props: {
      contactPage: contact,
    },
  };
};
