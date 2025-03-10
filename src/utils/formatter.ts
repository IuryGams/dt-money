
export function dateFormatter(date: Date) {
    const { format } = new Intl.DateTimeFormat("pt-BR");
    return format(date);
}

export function priceFormatter(price: number) {
    const {format} =  new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return format(price);
} 