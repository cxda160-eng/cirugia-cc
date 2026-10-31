# Cirugía en Cardiopatías Congénitas

App web instalable (PWA) de estudio sobre las opciones quirúrgicas en cardiopatías congénitas:

- **Cardiopatías:** 22 fichas con anatomía, indicación y momento quirúrgico, opciones paliativas, correctoras y percutáneas, evolución y perlas.
- **Esquemas:** 15 procedimientos paso a paso en 2D y en corazón 3D (Rashkind, switch arterial, Rastelli, BT, banding, Fallot, Norwood → Glenn → Fontan, híbrido, coartación, ductus, DVPAT, truncus, unifocalización, doble switch, cono de Da Silva).
- **Procedimientos:** glosario de técnicas.
- **Estudiar:** preguntas tipo examen, identificación de esquemas y tarjetas.

Material de estudio: las indicaciones y técnicas varían según el centro.

## Archivos
| Archivo | Qué es |
|---|---|
| `index.html` | la app completa |
| `lib/three.module.min.js` | motor 3D (three.js 0.170, licencia MIT) |
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
