FROM node:10.15

WORKDIR /workspace

RUN dpkg --add-architecture i386 && apt-get update && apt-get install --no-install-recommends -y wine wine32

COPY package.json package-lock.json /workspace/

RUN npm install

COPY . /workspace

ENTRYPOINT [ "tail",  "-f", "/dev/null" ]
