package router

import (
	"dydy/controller"
	"io/fs"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Init(port string) error {
	r := gin.Default()
	//静态文件开始
	sub, _ := fs.Sub(Static, "html")
	// r.GET("/", func(ctx *gin.Context) {
	// 	ctx.Redirect(http.StatusFound, "/main")
	// })
	r.StaticFS("/main", http.FS(sub))
	r.GET("/", func(ctx *gin.Context) {
		ctx.Data(200, "text/html", Html)
	})
	r.GET("/home", func(ctx *gin.Context) {
		ctx.Data(200, "text/html", Html)
	})
	r.GET("/table", func(ctx *gin.Context) {
		ctx.Data(200, "text/html", Html)
	})
	//静态文件结束

	//api开始
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
