# node 이미지 기반 Docker 이미지 생성
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

COPY package.json yarn.lock ./

# KU-key fe에 필요한 패키지 설치
RUN yarn --production
# build와 서버 배포에 필요한 수동 설치
RUN yarn global add serve
RUN yarn global add typescript
# 현재 디렉토리의 모든 파일을 도커 컨테이너의 작업 디렉토리에 복사
COPY . .
RUN yarn build

EXPOSE 3000

# serve
CMD ["serve", "-s", "dist"]