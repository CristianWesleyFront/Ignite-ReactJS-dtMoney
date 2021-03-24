import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount
    } else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, { 
    deposits: 0,
    withdraw: 0,
    total: 0
  })

  const IntlCurrency = (value) => {
    return  new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <Container> 
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="entradas" />
          </header>
          <strong>{IntlCurrency(summary.deposits)}</strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="saidas" />
          </header>
          <strong>- {IntlCurrency(summary.withdraw)}</strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="total" />
          </header>
          <strong>{IntlCurrency(summary.total)}</strong>
        </div>
    </Container>
  );
}
