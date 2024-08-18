import { create } from "zustand"

type Historico = {
    operacao: string,
    resultado: string
};

type Calculator = {
    inputText: string,
    setTextoInput: (texto: string) => void,
    clearTextoInput: () => void,
    permitirVirgula: boolean,
    setPermitirVirgula: (permissao: boolean) => void,
    historico?: Historico[],
    clearHistorico: () => void,
};

export const CalculatorStore = create<Calculator>((set) => ({
    inputText: "",
    setTextoInput: (texto: string) => set({inputText: texto}),
    clearTextoInput: () => set({inputText: ""}),
    permitirVirgula: true,
    setPermitirVirgula: (permissao: boolean) => set({permitirVirgula: permissao}),
    historico: [],
    clearHistorico: () => set({historico: []})
}));