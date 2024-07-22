# Descripción

Portafolio web dinámico con dashboard administrativo

## Levantar el desarrollo

1. Clonar el repositorio
2. Crear una copia del **.env.template** y renombrarlo a **.env** y cambiar variables de entorno.
3. Instalar dependencias

```
npm install
```

4. Levantar la base de datos

```
docker compose up -d
```

5. Correr las migraciones de Prisma

```
npx prisma migrate dev
```

6. LLenar el seed con los datos respectivos siguiendo el ejemplo
7. Ejecutar el seed

```
npm run seed
```

8. Correr el proyecto

```
npm run dev
```

## Servicios de terceros utilizadas

- Autenticación: Clerk
- Estilos: Shadcn
- Animaciones: Framer Motion
- Subida de archivos: Uploadthing
