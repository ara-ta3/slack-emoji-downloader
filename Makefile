PHP=$(shell which php)
host=localhost:8080

server:
	$(PHP) -S $(host) -t web
