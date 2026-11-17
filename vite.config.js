import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Disponibiliza na rede aberta (Wi-Fi / LAN) para outros dispositivos
    port: 3000,
    open: true
  }
});
