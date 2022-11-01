package router

import (
	"dydy/controller"
	"io/fs"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Init(port string) error {
	r := gin.Default()
	sub, _ := fs.Sub(Static, "html")
	r.GET("/", func(ctx *gin.Context) {
		ctx.Redirect(http.StatusFound, "/main")
	})
	r.StaticFS("/main", http.FS(sub))
	// r.GET("/index", func(ctx *gin.Context) {
	// 	ctx.Data(200, "text/html", Html)
	// })
	v1 := r.Group("v1")

	v1.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	v1.GET("/aa", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "hello world",
		})
	})
	user := v1.Group("user")
	user.POST("/", controller.AddUser)
	user.GET("/", controller.GetUser)
	return r.Run(port)
}
