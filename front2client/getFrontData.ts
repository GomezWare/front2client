export const getFrontData = () => {
    const Data: Record<string, any> = {}; // Inicializamos el objeto Data como un objeto con claves de tipo string y valores de tipo any

    // Accedemos a los datos encapsulados en `window.__FRONTMATTER__.data`
    const frontData: Record<string, any> = window.__FRONTMATTER__?.data || {};

    // Usamos un bucle para iterar sobre las claves del objeto frontData
    for (const key in frontData) {
        if (Object.prototype.hasOwnProperty.call(frontData, key)) {
            Data[key] = frontData[key]; // Asignamos cada valor al objeto Data
        }
    }

    return Data; // Devolvemos el objeto Data con las claves y valores de frontData
};