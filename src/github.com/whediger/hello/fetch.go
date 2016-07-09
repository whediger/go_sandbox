//fetch prints the content found at a URL
package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {
	buf := make([]byte, 8)

	for _, url := range os.Args[1:] {
		if !strings.HasPrefix(url, "http://") {
			url = "http://" + url
		}
		resp, err := http.Get(url)
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: %v\n", err)
			os.Exit(1)
		}
		if _, err := io.CopyBuffer(os.Stdout, resp.Body, buf); err != nil {
			log.Fatal(err)
		}
		fmt.Printf("%s", os.Stdout)
	}
}
