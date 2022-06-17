import { useState } from "react";
import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "3 yeni mesajınız var",
  },
  "en-US": {
    title: "Hello World",
    description: "You have 32 new messagge",
  },
};

function App() {
  const [lang, setLang] = useState("tr-TR");

  return (
    <IntlProvider messages={messages[lang]}>
      <FormattedMessage id="title" />

      <p>
        <FormattedMessage id="description" />
      </p>
      <br />
      <br />
      <button onClick={() => setLang("tr-TR")}>TR</button>
      <button onClick={() => setLang("en-US")}>EN</button>
    </IntlProvider>
  );
}

export default App;
