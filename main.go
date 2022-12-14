package main

import (
	"dydy/db"
	"dydy/model"
	"dydy/router"
	"fmt"
	"log"
)

func init() {
	if err := db.Initdb(); err != nil {
		log.Fatal(err)
	}
	if err := model.MigrateModel(); err != nil {
		log.Fatal(err)
	}

}

func main() {
	fmt.Println("Hello, World!")
	if err := router.Init(":8080"); err != nil {
		log.Fatalln(err.Error())
	}
}
