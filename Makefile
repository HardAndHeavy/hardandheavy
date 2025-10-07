prepare:
	docker build -t hardandheavy:dev -f ./Dockerfile.dev .

bash: prepare
	docker run -it --rm \
		-v ./app:/app \
		-p 80:3000 \
		hardandheavy:dev bash

dev: prepare
	docker run -it --rm \
		-v ./app:/app \
		-p 80:3000 \
		hardandheavy:dev make dev

test-prod:
	docker build -t hardandheavy:prod -f ./Dockerfile.prod .
	docker run -it --rm \
		-p 80:3000 \
		hardandheavy:prod
