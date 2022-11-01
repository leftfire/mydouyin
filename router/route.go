package router

import "github.com/gin-gonic/gin"

func Init(port string) error {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "hello world",
		})
	})

	return r.Run(port)

}
