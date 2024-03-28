generate-api:
	docker-compose -f docker-compose.api.yml run --rm openapi-generator-cli

build-dev-image:
	docker build --platform=linux/amd64 -t yinsiyu/yugod-frontend:v2.3 .

docker-run:
	docker-compose -f docker-compose.app.yml up -d

docker-down:
	docker-compose down

docker-push:
	docker push yinsiyu/yugod-frontend:v2.3
