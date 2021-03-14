import React, { FormEvent, useCallback, useRef } from 'react';
import Input from './components/Input';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input ref={nameInputRef} name="name" label="Nome completo" />
        <button type="button" onClick={handleAcceptTerms}>
          Aceitar termos
        </button>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
