package controller

import (
	"context"
	"fmt"
	"os/exec"
	"time"

	"github.com/gin-gonic/gin"
)

type CmdData struct {
	Cmd string `json:"cmd"`
}

func RunCmd(c *gin.Context) {
	var cmdData CmdData

	if err := c.Bind(&cmdData); err != nil {
		c.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}
	ct, canl := context.WithTimeout(context.Background(), 60*time.Second)
	defer canl()
	command := exec.CommandContext(ct, "bash", "-c", cmdData.Cmd)
	out, err := command.Output()
	if err != nil {
		c.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}
	fmt.Println("cmd out:", cmdData)
	c.JSON(200, gin.H{
		"message": string(out),
	})
}
