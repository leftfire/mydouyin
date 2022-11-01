package controller

import "github.com/gin-gonic/gin"

func Create(c *gin.Context, model interface{}) gin.HandlerFunc {
	return func(c *gin.Context) {
		if err := c.BindJSON(&model); err != nil {
			c.JSON(400, gin.H{
				"message": "参数错误",
			})
			return
		}
		c.JSON(200, gin.H{
			"message": "添加成功",
		})
	}
}
