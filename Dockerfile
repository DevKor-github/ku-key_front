# node 이미지 기반 Docker 이미지 생성
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

COPY package.json yarn.lock ./

# 의존성 설치 명령어 실행
RUN yarn --production;
# 현재 디렉토리의 모든 파일을 도커 컨테이너의 작업 디렉토리에 복사
COPY . .

# 5173번 포트 노출
EXPOSE 5173

# npm start 스크립트 실행
CMD ["yarn", "dev"]