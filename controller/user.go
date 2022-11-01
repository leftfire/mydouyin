package controller

import (
	"dydy/model"

	"github.com/gin-gonic/gin"
)

//增加用户

func AddUser(c *gin.Context) {
	var u model.User
	if err := c.BindJSON(&u); err != nil {
		c.JSON(400, gin.H{
			"message": "参数错误",
		})
		return
	}
	if err := u.AddUser(); err != nil {
		c.JSON(400, gin.H{
			"message": "添加失败",
		})
		return
	}
	c.JSON(200, gin.H{
		"message": "添加成功",
	})
}

//查询用户
