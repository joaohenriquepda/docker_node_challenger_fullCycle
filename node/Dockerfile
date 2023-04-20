FROM node:18.0

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for


COPY . .

RUN chmod +x start.sh
EXPOSE 3000

# WORKDIR /usr/src/app