const arrayDeObjs = [
    {
        nome: "Lucas",
        nota: 10,
    },
    {
        nome: "Ana",
        nota: 1,
    },
    {
        nome: "Julia",
        nota: 6,
    },
    {
        nome: "Pedro",
        nota: 2,
    },
    {
        nome: "Rodrigo",
        nota: 3,
    },
];

const acimaDaMedia = (arrayDeObjs) => {
    const alunosAcimaDaMedia = arrayDeObjs.filter((element) => {
        return element.nota >= 6;
    });
    console.log(alunosAcimaDaMedia);
};

acimaDaMedia(arrayDeObjs);
