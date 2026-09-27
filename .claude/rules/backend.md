# Reglas del backend para ProjectON

## Alcance

Estas reglas aplican cuando se toca lógica de negocio, persistencia, sincronización, DTOs o integración con servicios externos.

## Principios

- La lógica del negocio vive en `src/core/` y debe seguir siendo pura y testeada.
- La persistencia se abstrae mediante repositorios en `src/data/`.
- No se asume backend real ni sincronización multiusuario disponible.
- El acceso a bases de datos o APIs reales debe respetar la capa de servicio y no mezclarse con la UI.

## Convenciones

- Mantener las estructuras de datos consistentes entre repositorios y modelos.
- Si agregás un método a un repositorio, también actualizá la implementación y los tests que lo cubran.
- Los cambios de persistencia deben ser compatibles con el modelo local-first.
- Tomar decisiones de diseño sobre la base de que el sistema debe ser auditable y reproducible.

## Antes de cerrar una tarea

1. Revalidar los tests del core o del módulo afectado.
2. Verificar que la persistencia siga funcionando con el adaptador actual.
3. Confirmar que la documentación de arquitectura no quede desactualizada.
4. No introducir secretos ni claves en el frontend.

## Archivos relevantes

- `src/core/`
- `src/data/`
- `src/db/`
- `docs/BACKEND-API.md`
