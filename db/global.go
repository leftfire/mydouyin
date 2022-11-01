package db

import (
	"fmt"

	"gorm.io/driver/mysql"

	"gorm.io/gorm"
)

var G_db *gorm.DB

func Initdb() error {

	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", "douyin121", "f4fd0411616a7c83", "mysql.sqlpub.com:3306", "douyin121")

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return err
	}
	G_db = db
	return nil
}
