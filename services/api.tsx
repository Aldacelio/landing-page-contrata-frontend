import axios from 'axios';

const API_URL = 'https://landing-page-contrata-backend-production.up.railway.app/api/dados';

interface Dados {
  nome: string;
  email: string;
  feedback: string;
}

export async function adicionarDados(dados: Dados): Promise<any> {
  try {
    const response = await axios.post(API_URL, dados, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
