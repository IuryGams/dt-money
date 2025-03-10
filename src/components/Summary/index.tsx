import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";


export function Summary() {
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>{priceFormatter(summary.income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68" />
                </header>
                <strong>{priceFormatter(summary.outcome)}</strong>
            </SummaryCard>
            <SummaryCard 
                $variant={(summary.income ?? 0) < (summary.outcome ?? 0) ? "red" : "green"}
            >
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF" />
                </header>
                <strong>{priceFormatter(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}