import { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../constants/ApiUrl';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    
  };

  return { login, loading, error };
};

export default useLogin;
