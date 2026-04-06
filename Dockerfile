FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

# Next.js build needs the whole project (configs, app, locales, etc.)
COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

# Bind to all interfaces so the app is reachable from outside the container
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0", "-p", "3000"]
