package router

import (
	"embed"
)

//go:embed html/index.html
var Html []byte

//go:embed html/*.js
//go:embed html/*.css
//go:embed html/*.html
var Static embed.FS

// type Resource struct {
// 	fs   embed.FS
// 	path string
// }

// func NewResource() *Resource {
// 	return &Resource{
// 		fs:   Static,
// 		path: "html",
// 	}
// }

// func (r *Resource) Open(name string) (fs.File, error) {
// 	if filepath.Separator != '/' && strings.ContainsRune(name, filepath.Separator) {
// 		return nil, errors.New("http: invalid character in file path")
// 	}
// 	fullName := filepath.Join(r.path, filepath.FromSlash(path.Clean("/static/"+name)))
// 	file, err := r.fs.Open(fullName)

// 	return file, err
// }
