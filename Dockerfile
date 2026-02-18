# Use the official Node.js 20 image
FROM node:20

# 1. Install pnpm globally so the RUN commands actually work
RUN npm install -g pnpm

WORKDIR /app

# 2. Copy dependency files first to leverage Docker layer caching
COPY package*.json pnpm-lock.yaml* ./

# 3. Install dependencies
RUN pnpm install

# 4. Copy the rest of your source code
COPY . . 

# 5. Build the project
RUN pnpm build

EXPOSE 3000

# 6. Corrected CMD syntax (no trailing comma)
CMD ["pnpm", "start"]
