import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api
      .get('http://localhost:3000/api/transactions')
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 1.000,00</td>
            <td>Alimentação</td>
            <td>01/01/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw"> - R$ 1.000,00</td>
            <td>Alimentação</td>
            <td>01/01/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 1.000,00</td>
            <td>Alimentação</td>
            <td>01/01/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 1.000,00</td>
            <td>Alimentação</td>
            <td>01/01/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
