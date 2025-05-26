// Para Login (solo email y password)
export interface Login {
  email: string;
  password: string;
}

// Para Register (campos obligatorios + opcionales)
export interface Register {
  email: string;
  password: string;
  name: string;       // Obligatorio en registro
  phoneNumber?: string; // Opcional
}

// Para el usuario autenticado (datos completos)
export interface UserAuth {
  uid: string;               // Autogenerado por Firebase
  email: string;
  name?: string;
  emailVerified: boolean;    // Autogestionado
  createdAt: Date;           // Autogestionado
  lastLogin?: Date;          // Autogestionado
  phoneNumber?: string;
}