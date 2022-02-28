import React, { useContext } from 'react';
import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionContext';

import { Container } from "./styles";

export function Summary() {
    const transactions = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="Saídas" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className='background-color-green'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}