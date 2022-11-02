package model

import (
	"fmt"
	"io/ioutil"

	"github.com/imroc/req/v3"
)

const UploadUrl = `https://open-api.tiktok.com/share/video/upload/`
const AuthorUrl = `https://www.tiktok.com/auth/authorize/`
const ClientKey = `awfc2mrcq3qxqg5q`

//认证
type Author struct {
	ClientKey    string
	Scope        string
	RedirectUrl  string
	State        string
	ResponseType string
}

//上传
type Uploader struct {
	// open_id  string The TikTok user's unique identifier, which is obtained through /oauth/access_token/.
	OpenId string `json:"open_id,omitempty"`
	//access_token  string  The token that bears the authorization of the TikTok user, which is obtained through /oauth/access_token/.
	AccessToken string `json:"access_token,omitempty"`
	FilePath    string
}

func (author Author) Authorize() (string, error) {
	c := req.C()
	requrl := fmt.Sprintf("%s?client_key=%s&scope=%s&redirect_url=%s&state=%s&response_type=%s", AuthorUrl, ClientKey, author.Scope, author.RedirectUrl, author.State, author.ResponseType)

	fmt.Println("requrl:", requrl)

	resp, err := c.R().Get(requrl)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	bs, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}
	fmt.Println("bs:", string(bs))
	return string(bs), nil
}

func (up Uploader) Upload() error {
	c := req.C()
	resp, err := c.R().SetFile("vidio", up.FilePath).SetFormData(map[string]string{
		"open_id":      up.OpenId,
		"access_token": up.AccessToken,
	}).Post(UploadUrl)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return err
	}
	fmt.Println("b:", string(b))

	return nil
}
