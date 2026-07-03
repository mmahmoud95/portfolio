
import { useState } from 'react';

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (event, router) => {
    try {
      setLoading(true);
      await fetch(
        'https://formsubmit.co/ajax/mustafa.mahmoud.za@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
        }
      );
      router.push('/thankyou');
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Please try again");
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    submitForm,
  };
};