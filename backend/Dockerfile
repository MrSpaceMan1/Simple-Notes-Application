FROM node:23-alpine AS build
COPY . /build/
WORKDIR /build/
RUN ["npm", "i"]
RUN ["npm", "run", "build"]

FROM node:23-alpine AS run
COPY --from=build /build/dist/ /app/
COPY --from=build /build/node_modules /app/node_modules
COPY --from=build /build/package.json /app/
WORKDIR /app/
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "main.js"]