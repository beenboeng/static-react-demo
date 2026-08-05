# syntax=docker/dockerfile:1

# ---------- Stage 1: build ----------
FROM oven/bun:1.3-alpine AS build

WORKDIR /app

# Manifest + lockfile first: this layer only rebuilds when dependencies
# change, so editing src/ reuses the cached install.
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY tsconfig.json vite.config.ts tsr.config.json index.html ./
COPY src ./src

RUN bun run build

# ---------- Stage 2: serve ----------
# Unprivileged nginx: runs as uid 101, listens on 8080, no root in the
# final image. Only the built assets cross the stage boundary — no bun,
# no node_modules, no source.
FROM nginxinc/nginx-unprivileged:1.29-alpine AS runtime

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
