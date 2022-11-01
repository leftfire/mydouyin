package model

import "dydy/db"

func Add(model interface{}) error {
	return db.G_db.Create(&model).Error
}

func Get(model interface{}) ([]interface{}, error) {
	var models []interface{}
	err := db.G_db.Find(&models).Error
	return models, err
}

func Delete(model interface{}) error {
	return db.G_db.Delete(&model).Error
}

func Update(model interface{}) error {
	return db.G_db.Save(&model).Error
}
