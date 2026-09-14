# ProjectON / PMI Toolbox — notas para Claude

Control de proyectos con motor de **Earned Value Management**. En producción
en https://franponcio.github.io/PMI-Toolbox/

**Este archivo existe para no redescubrir el repo en cada sesión.** Si algo
acá quedó viejo, corregilo en el momento: cuesta menos que volver a explorar.

## Adónde va

Que Francisco pueda agarrar **cualquier** proyecto —un gasoducto, una obra
civil, un desarrollo— y hacerle el seguimiento como corresponde: línea base
congelada, avance físico contra costo, y pronóstico de plazo. No un Gantt
más: la parte que casi ningún software barato hace bien es medir contra una
foto aprobada del plan en vez de contra el plan de ayer.

Esa es la vara para cualquier decisión de diseño: **si no ayuda a responder
"¿cómo viene esto contra lo que prometimos?", probablemente no va.**

## Estado

Lo construido y lo que falta está en el Roadmap del README, que se mantiene
al día. Al cierre de la última sesión: el motor, el tablero, la línea base
congelada, el Earned Schedule, los imports por CSV, la WBS jerárquica, los
umbrales por etapa y el asistente están hechos. Quedan dos cosas:

- **Sincronización multi-dispositivo**: la arquitectura está (`SyncAdapter`),
  falta el servidor real. Este entorno estático no lo despliega.
- **Notificación a Slack** cuando un paquete cruza a desvío. Sin empezar.

**Al terminar una sesión, actualizá estas líneas.** Es lo que evita que la
próxima tenga que deducir dónde quedó todo.

## Dónde está cada cosa

```
src/core/          EL MOTOR. evm.ts, earnedSchedule.ts, csv.ts, types.ts
src/analytics/     baseline, wbs, schedule, status, decisions, resolve
src/data/          persistencia con patrón repositorio (ver abajo)
src/db/            Dexie (IndexedDB) y la semilla
src/store/         Zustand: pmStore.ts y selectors.ts
src/ui/            Dashboard, Report, componentes y formularios
src/assistant/     el asistente: mock, http y tipos
supabase/functions/assistant/   el backend del asistente
docs/              GUIA-DE-USO.md, ASISTENTE-IA.md, BACKEND-API.md, media/
```

## Comandos

```bash
npm install
npm run dev
npm test          # vitest — 15 archivos de test
npm run typecheck
npm run build
```

## Lo que hay que saber antes de tocar

- **`src/core/evm.ts` es el corazón y está testeado.** PV, EV, AC, SV, CV,
  SPI, CPI, las tres variantes de EAC, ETC, VAC y TCPI. Antes de cambiar una
  fórmula, mirá el test: si el cambio es correcto, el test tiene que decir por
  qué el valor anterior estaba mal. **Ninguna fórmula se toca sin test.**
- **La línea base se congela.** El desempeño se mide contra esa foto, no
  contra el plan actual. Cualquier cosa que permita editar la línea base
  aprobada sin dejar rastro rompe la premisa del producto.
- **Patrón repositorio en `src/data/`**: hay implementación en memoria, en
  Dexie y una que sincroniza. `repository.contract.test.ts` corre el mismo
  contrato contra todas. Si agregás un método al repositorio, va al contrato
  o queda sin probar en las otras implementaciones.
- **La app es local-first**: los datos viven en IndexedDB del navegador. No
  asumir que hay servidor.
- **El asistente tiene versión mock y versión http.** El desarrollo y los
  tests corren contra el mock; la http pega a la function de Supabase. No
  meter claves de API en el cliente.
- `vite.config.ts` usa `base: './'` — rutas relativas, así que la app anda en
  cualquier subcarpeta sin recompilar.

## Convenciones

- **Todo en castellano**: variables, comentarios, commits. Francisco escribe
  rioplatense; contestale igual.
- Los comentarios explican POR QUÉ, no qué.
- TypeScript estricto. `npm run typecheck` antes de dar algo por terminado.
- Tailwind para estilos.

## Cómo trabajar acá sin quemar tokens

Francisco paga el consumo y las sesiones son largas.

- **No releas archivos enteros.** `grep -n` acotado y `sed -n` del rango que
  vas a tocar.
- **Editá con reemplazo puntual**, no reescribiendo el archivo completo.
- **Un solo build o test al final**, no uno por cada micro-edición.
- Capturá pantalla sólo si cambiaste algo visual, y recortado.
- Agrupá comandos independientes en una sola llamada.
- Leé los archivos que necesites sin pedir permiso: cada ida y vuelta reenvía
  toda la conversación y sale más caro que abrir el archivo.

## Datos

Los datos de proyectos reales de gasoductos son del empleador, no de
Francisco. **En capturas, fixtures y documentación van números inventados**,
nunca cifras operativas reales.

## Pendiente anotado

El repo se llama `ProjectON`, el paquete `pmi-toolbox` y la URL publicada
`/PMI-Toolbox/`. Son tres nombres para lo mismo. Conviene unificar, pero
cambiar la URL rompe los links ya publicados — preguntarle a Francisco antes
de tocarlo.
