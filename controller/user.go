package controller

import (
	"dydy/model"

	"github.com/gin-gonic/gin"
)

//增加用户

func AddUser(c *gin.Context) {
	var u model.User
	if err := c.Bind(&u); err != nil {
		c.JSON(400, gin.H{
			"message": "参数错误" + err.Error(),
		})
		return
	}
	if err := model.UserAdd(&u); err != nil {
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
func GetUser(c *gin.Context) {
	ulist, err := model.GetUser()
	if err != nil {
		c.JSON(400, gin.H{
			"message": "查询失败",
		})
		return
	}
	c.JSON(200, gin.H{
		"message": "查询成功",
		"data":    ulist,
	})

}
