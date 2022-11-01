package model

import (
	"dydy/db"

	"gorm.io/gorm"
)

// User 用户表
type User struct {
	gorm.Model
	Username string `gorm:"type:varchar(20);not null;unique" json:"username"`
	Password string `gorm:"type:varchar(20);not null" json:"password"`
	Email    string `gorm:"type:varchar(20);not null;unique" json:"email"`
	Phone    string `gorm:"type:varchar(20);not null;unique" json:"phone"`
	Avatar   string `gorm:"type:varchar(100)" json:"avatar"`
	Role     string `gorm:"type:varchar(20);not null" json:"role"`
}

//添加用户
func (u *User) AddUser() error {
	return db.G_db.Create(u).Error
}

//查询用户
func GetUser() ([]User, error) {
	var users []User
	err := db.G_db.Find(&users).Error
	return users, err
}
