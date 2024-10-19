export const getFrontData = () => {
    const Data: Record<string, any> = {}; // Inicializamos el objeto Data como un objeto con claves de tipo string y valores de tipo any
    const frontData: Record<string, any> = window.frontmatterData; // Especificamos que frontData es un objeto de claves y valores de tipo any

    // Usamos un bucle para iterar sobre las claves del objeto frontData
    for (const key in frontData) {
        if (frontData.hasOwnProperty(key)) {
            Data[key] = frontData[key]; // Asignamos cada valor al objeto Data
        }
    }

    return Data; // Devolvemos el objeto Data con las claves y valores de frontData
};