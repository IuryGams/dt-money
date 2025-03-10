import styled from "styled-components";


export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem 0;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: inline-flex;
        align-items: center;
        gap: 12px;

        span {
            font-size: 2rem;
            font-weight: bold;
        }

        img {
            width: 40px;
            height: 40px;
            object-fit: cover;
        }

    }

`

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`