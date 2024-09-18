import cases from "$lib/data/home.json"

export function load({ params }) {
    const temp = cases.find(o => o.name == params.nome);
    if (!temp) throw new Error("Contenuto non disponibile");
    return temp;
}