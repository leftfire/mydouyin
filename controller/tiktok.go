package controller

import (
	"dydy/model"

	"github.com/gin-gonic/gin"
)

func Authorize(c *gin.Context) {
	var author = model.Author{
		Scope:        "video.upload",
		RedirectUri:  "https://szyq.eu.org/v1/tiktok/callback",
		State:        "123",
		ResponseType: "code",
	}
	resp, err := author.Authorize()
	if err != nil {
		c.JSON(200, gin.H{
			"message": "认证失败" + err.Error(),
		})
		return
	}
	c.JSON(200, gin.H{
		"message": "认证成功" + resp,
	})
}
func Authorize1(c *gin.Context) {
	var author = model.Author{
		Scope:        "video.upload",
		RedirectUri:  "https://szyq.eu.org/v1/tiktok/callback",
		State:        "123",
		ResponseType: "code",
	}
	resp, err := author.Authorize()
	if err != nil {
		c.JSON(200, gin.H{
			"message": "认证失败" + err.Error(),
		})
		return
	}
	c.Data(200, "text/html", []byte(resp))
}

//callback
func Callback(c *gin.Context) {

}
