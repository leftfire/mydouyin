package main

import (
	"dydy/router"
	"fmt"
	"log"
)

func main() {
	fmt.Println("Hello, World!")
	if err := router.Init(":8080"); err != nil {
		log.Fatalln(err.Error())
	}
}
