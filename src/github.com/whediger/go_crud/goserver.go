//goserver serves a simple crud app

package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"sync"
)

var mu sync.Mutex
var count int

type Page struct {
	Title string
	Body  []byte
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("./public")))
	http.HandleFunc("/wes", handler)
	http.HandleFunc("/count", counter)
	//http.HandleFunc("/", wes)
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

func loadPage(title string) *Page {
	filename := title + ".html"
	body, _ := ioutil.ReadFile(filename)
	return &Page{Title: title, Body: body}
}

// //this page serves a page with my name as a title

//func wes.handle(http.FileServer("/", http.Dir("./static")))

// func wes(w http.ResponseWriter, r *http.Request) {
// 	title := r.URL.Path["index"]
// 	p, _ := loadPage(title)
// 	fmt.Fprint(w, "<h1>%s</h1><div>%s</div>", p.Title, p.Body)
//
// 	mu.Lock()
// 	fmt.Fprintf(w, "this is wes's page")
// 	mu.Unlock()
// }

//counter echoes the number of calls so far
func counter(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	fmt.Fprintf(w, "Count %d\n", count)
	mu.Unlock()
}

//handler echoes the http request
func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s %s %s\n", r.Method, r.URL, r.Proto)
	for k, v := range r.Header {
		fmt.Fprintf(w, "Header[%q] = %q\n", k, v)
	}
	fmt.Fprintf(w, "Host = %q\n", r.Host)
	fmt.Fprintf(w, "RemoteAddr = %q\n", r.RemoteAddr)
	if err := r.ParseForm(); err != nil {
		log.Print(err)
	}
	for k, v := range r.Form {
		fmt.Fprintf(w, "Form[%q] = %q\n", k, v)
	}
}
