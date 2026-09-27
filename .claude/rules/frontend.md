# Reglas del frontend para ProjectON

## Alcance

Estas reglas aplican cuando se modifica la UI, formularios, dashboards, exportaciones o comportamiento visible del usuario.

## Principios

- La interfaz debe favorecer la lectura de gestión y la toma de decisiones, no solo la visualización.
- La UI no debe recalcular indicadores clave; debe consumir el resultado del motor.
- Mantener la pantalla clara, con conclusiones precediendo a gráficos y tablas.
- Dar prioridad a legibilidad, densidad útil y coherencia con la semántica visual del producto.

## Convenciones

- Interpretar los datos en castellano y mantener la nomenclatura coherente.
- No inventar indicadores ni métricas sin ponerlos en el motor y en la documentación.
- Mantener los paneles ordenados por exposición, riesgo o decisión de negocio.
- Si se agrega un nuevo campo o flujo, revisar la guía de uso y el índice de documentación.

## Archivos relevantes

- `src/ui/`
- `src/store/`
- `docs/GUIA-DE-USO.md`
- `README.md`
