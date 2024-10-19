// src/types/global.d.ts

declare global {
  interface Window {
    frontmatterData: Record<string, any>; // Extiende el objeto window para incluir la propiedad frontmatterData
  }
}

export {};
