import Head from 'next/head';
import { Fragment } from 'react';
import ContactForm from '../components/contact/contact-form';

function ContactPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Contact BOBO</title>
        <meta name='description' content='보보한테 연락해주세요' />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
