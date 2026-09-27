# Reglas de pruebas para ProjectON

## Objetivo

La validación debe centrarse en el motor de cálculo, la lógica de negocio y los cambios de comportamiento visibles.

## Reglas

- Las fórmulas de EVM y Earned Schedule deben tener pruebas.
- Cada bug corregido debe ir acompañado de una prueba de regresión.
- No se aceptan cambios que hagan desaparecer validaciones existentes.
- Los casos borde deben cubrir: división por cero, avance cero, costo cero, proyectos terminados y variaciones de línea base.

## Comandos

```bash
npm test
npm run typecheck
```

## Archivos relevantes

- `src/core/*.test.ts`
- `src/data/**/*.test.*`
- `src/store/**/*.test.*` si existen
