build-dev-image:
	docker build --platform=linux/amd64 -t yinsiyu/yugod-frontend:v1.1 .

docker-run:
	docker-compose up -d

docker-down:
	docker-compose down

docker-push:
	docker push yinsiyu/yugod-frontend:v1.1
