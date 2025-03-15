import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App';
import enMessages from './locales/en.json';
import esMessages from './locales/es.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const messages = {
  en: enMessages,
  es: esMessages,
};

function Main() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const browserLocale = navigator.language || navigator.userLanguage;
    const newLocale = browserLocale.startsWith('es') ? 'es' : 'en';
    setLocale(newLocale);
    console.log("Locale detected:", newLocale);
    console.log("Messages:", messages[newLocale]);
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]} key={locale}>
      <App />
    </IntlProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
