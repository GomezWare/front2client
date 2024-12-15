declare global {
  interface Window {
    __FRONTMATTER__?: {
      data: Record<string, any>; // Extiende el objeto window para incluir el espacio de nombres __FRONTMATTER__ con los datos
    };
  }
}

export {};
