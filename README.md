# Cirugía en Cardiopatías Congénitas

App web instalable (PWA) de estudio sobre las opciones quirúrgicas en cardiopatías congénitas:

- **Cardiopatías:** 31 fichas con anatomía, indicación y momento quirúrgico, opciones paliativas, correctoras y percutáneas, riesgo STAT 2020, evolución, perlas y notas personales.
- **Esquemas:** 25 procedimientos paso a paso en 2D y en corazón 3D.
- **UCI:** postoperatorio por procedimiento (qué esperar, qué vigilar, cómo actuar) y problemas frecuentes (bajo gasto, crisis de HTP, JET, balance Qp/Qs, quilotórax, derrames, BAV).
- **Procedimientos:** glosario de técnicas.
- **Estudiar:** 88 preguntas por tema, repaso de errores, identificación de esquemas, tarjetas, progreso y respaldo de datos.

Material de estudio: las indicaciones y técnicas varían según el centro.

## Archivos
| Archivo | Qué es |
|---|---|
| `index.html` | la app completa |
| `lib/three.module.min.js` | motor 3D (three.js 0.170, licencia MIT) |
| `fonts/` | tipografía IBM Plex (licencia OFL) |
| `sw.js` | funcionamiento sin conexión |
| `manifest.webmanifest` | nombre e ícono para instalarla |
| `icons/` | íconos |

## Publicar con GitHub Pages
1. Subí estos archivos a la raíz del repositorio (rama `main`).
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
3. En 1-2 minutos queda en `https://USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Instalar en el iPhone
Abrir la dirección en **Safari → Compartir → Agregar a pantalla de inicio**. Abrirla una vez con conexión; después funciona sin internet, incluido el 3D.

## Actualizar
Cambiar `VERSION` en `sw.js` (v1 → v2) y subir los archivos nuevos.
