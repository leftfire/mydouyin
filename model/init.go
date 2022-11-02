package model

import "dydy/db"

//注册模型
func MigrateModel() error {
	return db.G_db.AutoMigrate(&User{})
}
