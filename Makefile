
NAME:=$(shell cat manifest.json | jq -r '.name' | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
VERSION:=$(shell cat manifest.json | jq -r '.version')
SRC:=$(shell find . -name '*.js' -or -name '*.json') LICENSE README.md
TARGET:=$(NAME)-$(VERSION).zip

all: $(TARGET) 

$(TARGET):$(SRC)
	zip $@ $^

clean:
	rm $(TARGET)
