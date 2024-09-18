import cases from "$lib/data/branding.json"

export function load({ params }) {
    const temp = cases.find(o => o.name == params.nome);
    if (!temp) throw new Error("Contenuto non disponibile");
    return temp;
}