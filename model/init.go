package model

import "dydy/db"

//注册模型
func init() {
	db.G_db.AutoMigrate(&User{})
}
